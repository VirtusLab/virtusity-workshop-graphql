import { PubSub, withFilter } from 'graphql-subscriptions';

import {
  Character,
  Droid,
  DroidFriendsConnectionArgs,
  Episode,
  Human,
  HumanFriendsConnectionArgs,
  LengthUnit,
  Resolvers,
  Review,
  Starship,
} from '../types';

import humans, { HumanData } from './data/humans';
import droids, { DroidData } from './data/droids';
import starships from './data/starships';
import reviews from './data/reviews';

const pubsub = new PubSub();
const ADDED_REVIEW_TOPIC = 'new_review';

function isNotEmpty<T>(value: null | undefined | T): value is T {
  return Boolean(value);
}

function getHuman(id: string): Human | null {
  return humans.find((human) => human.id === id) || null;
}

function getDroid(id: string): Droid | null {
  return droids.find((droid) => droid.id === id) || null;
}

function getCharacter(id: string): Character | null {
  return getHuman(id) || getDroid(id);
}

/**
 * Allows us to fetch the undisputed hero of the Star Wars trilogy, R2-D2.
 */
function getHero(episode: Episode | null) {
  if (episode === Episode.EMPIRE) {
    return getHuman('1000'); // Luke is the hero of Episode V.
  }
  return getDroid('2001'); // Artoo is the hero otherwise.
}

function getReviews(episode: Episode): Review[] {
  return reviews[episode];
}

function getStarship(id: string): Starship | null {
  return starships.find((ship) => ship.id === id) || null;
}

function toCursor(str: string | number) {
  return Buffer.from(`cursor${str}`).toString('base64');
}

function fromCursor(str: string) {
  return Buffer.from(str, 'base64').toString().slice(6);
}

function friendsConnection(
  { friends }: Character,
  { first, after }: DroidFriendsConnectionArgs | HumanFriendsConnectionArgs,
) {
  const friendsLength = (friends ? friends.length : 0);
  const firstArg = first || friendsLength;
  const afterArg = after ? parseInt(fromCursor(after), 10) : 0;
  const edges = (friends || []).map((friend, i) => ({
    cursor: toCursor(i + 1),
    node: getCharacter(friend.id),
  })).slice(afterArg, firstArg + afterArg);
  const slicedFriends = edges.map(({ node }) => node).filter(isNotEmpty);
  return {
    edges,
    friends: slicedFriends,
    pageInfo: {
      startCursor: edges.length > 0 ? edges[0].cursor : null,
      hasNextPage: firstArg + afterArg < friendsLength,
      endCursor: edges.length > 0 ? edges[edges.length - 1].cursor : null,
    },
    totalCount: friendsLength,
  };
}

function convertLength(
  length: number | null,
  unit: LengthUnit,
) {
  if (!length) {
    return null;
  }

  if (unit === LengthUnit.FOOT) {
    return length * 3.28084;
  }

  return length;
}

const resolvers: Resolvers = {
  Query: {
    hero: (root, { episode }) => getHero(episode || null),
    character: (root, { id }) => getCharacter(id),
    human: (root, { id }) => getHuman(id),
    droid: (root, { id }) => getDroid(id),
    starship: (root, { id }) => getStarship(id),
    reviews: (root, { episode }) => getReviews(episode),
    search: (root, { text }) => {
      if (!text) {
        return [];
      }

      const re = new RegExp(text, 'i');

      const allData = [
        ...humans,
        ...droids,
        ...starships,
      ];

      return Promise.resolve(allData.filter((obj) => re.test(obj.name)));
    },
  },
  Mutation: {
    createReview: (root, { episode, review: reviewInput }) => {
      const review: Review = {
        episode,
        ...reviewInput,
      };
      reviews[episode].push(review);
      pubsub.publish(ADDED_REVIEW_TOPIC, { reviewAdded: review });
      return review;
    },
  },
  Subscription: {
    reviewAdded: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(ADDED_REVIEW_TOPIC),
        (payload, variables) => (payload !== undefined)
          && ((variables.episode === null)
            || (payload.reviewAdded.episode === variables.episode)),
      ),
    },
  },
  Character: {
    __resolveType(data) {
      if (!data.id) {
        return null;
      }

      if (getHuman(data.id)) {
        return 'Human';
      }
      if (getDroid(data.id)) {
        return 'Droid';
      }

      return null;
    },
  },
  Human: {
    height: ({ height }, { unit }) => convertLength(height || null, unit),
    friends: (human) => (human as HumanData).friendsIds.map(getCharacter).filter(isNotEmpty),
    friendsConnection,
    starships: (human) => (human as HumanData).starshipsIds.map(getStarship).filter(isNotEmpty),
  },
  Droid: {
    friends: (droid) => (droid as DroidData).friendsIds.map(getCharacter).filter(isNotEmpty),
    friendsConnection,
  },
  FriendsConnection: {
    edges: ({ edges }) => edges || null,
    friends: ({ friends }) => friends || null,
    pageInfo: ({ pageInfo }) => pageInfo || null,
    totalCount: ({ totalCount }) => totalCount || null,
  },
  FriendsEdge: {
    node: ({ node }) => node || null,
    cursor: ({ cursor }) => cursor,
  },
  Starship: {
    length: ({ length }, { unit }) => convertLength(length || null, unit),
    coordinates: () => [[1, 2], [3, 4]],
  },
  SearchResult: {
    __resolveType(data) {
      if (data instanceof Promise) {
        return null;
      }

      if (!data || !data.id) {
        return null;
      }

      if (getHuman(data.id)) {
        return 'Human';
      }
      if (getDroid(data.id)) {
        return 'Droid';
      }
      if (getStarship(data.id)) {
        return 'Starship';
      }

      return null;
    },
  },
};

export default resolvers;
