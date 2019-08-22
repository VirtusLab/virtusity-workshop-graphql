import humans from './data/humans.js';
import droids from './data/droids.js';
import starships from './data/starships.js';
import reviews from './data/reviews.js';

import { Resolvers, Episode, Review, Human } from '../types';

function getHuman(id: string) {
  return humans.find(human => human.id === id);
}

function getDroid(id: String) {
  return droids.find(droid => droid.id === id);
}

function getCharacter(id: String) {
  return getHuman(id) || getDroid(id);
}

function getFriends(character) {
  return character.friends && character.friends.map((id) => getCharacter(id));
}

/**
 * Allows us to fetch the undisputed hero of the Star Wars trilogy, R2-D2.
 */
function getHero(episode: Episode) {
  if (episode === 'EMPIRE') {
    return getHuman('1000'); // Luke is the hero of Episode V.
  }
  return getDroid('2001'); // Artoo is the hero otherwise.
}

function getReviews(episode: Episode): Array<Review> {
  return reviews[episode];
}

function getStarship(id: string) {
  return starships.find(ship => ship.id === id);
}

function toCursor(str: string) {
  return new Buffer("cursor" + str).toString('base64');
}

function fromCursor(str: string) {
  return Buffer.from(str, 'base64').toString().slice(6);
}

const resolvers: Resolvers = {
  Query: {
    hero: (root, { episode }) => getHero(episode),
    character: (root, { id }) => getCharacter(id),
    human: (root, { id }) => getHuman(id),
    droid: (root, { id }) => getDroid(id),
    starship: (root, { id }) => getStarship(id),
    reviews: (root, { episode }) => getReviews(episode),
    search: (root, { text }) => {
      const re = new RegExp(text, 'i');

      const allData = [
        ...humans,
        ...droids,
        ...starships,
      ];

      return allData.filter((obj) => re.test(obj.name));
    },
  },
  Mutation: {
    createReview: (root, { episode, review }) => {
      reviews[episode].push(review);
      review.episode = episode;
      pubsub.publish(ADDED_REVIEW_TOPIC, { reviewAdded: review });
      return review;
    },
  },
  Subscription: {
    reviewAdded: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(ADDED_REVIEW_TOPIC),
        (payload, variables) => {
          return (payload !== undefined) &&
            ((variables.episode === null) || (payload.reviewAdded.episode === variables.episode));
        }
      ),
    },
  },
  Character: {
    __resolveType(data, context, info) {
      if (getHuman(data.id)) {
        return info.schema.getType('Human');
      }
      if (getDroid(data.id)) {
        return info.schema.getType('Droid');
      }
      return null;
    },
  },
  Human: {
    height: ({ height }, { unit }) => {
      if (unit === 'FOOT') {
        return height * 3.28084;
      }

      return height;
    },
    friends: ({ friends }) => friends.map(getCharacter),
    friendsConnection: ({ friends }, { first, after }) => {
      first = first || friends.length;
      after = after ? parseInt(fromCursor(after), 10) : 0;
      const edges = friends.map((friend, i) => ({
        cursor: toCursor(i + 1),
        node: getCharacter(friend)
      })).slice(after, first + after);
      const slicedFriends = edges.map(({ node }) => node);
      return {
        edges,
        friends: slicedFriends,
        pageInfo: {
          startCursor: edges.length > 0 ? edges[0].cursor : null,
          hasNextPage: first + after < friends.length,
          endCursor: edges.length > 0 ? edges[edges.length - 1].cursor : null
        },
        totalCount: friends.length
      };
    },
    starships: ({ starships }) => starships.map(getStarship),
    appearsIn: ({ appearsIn }) => appearsIn,
  },
  Droid: {
    friends: ({ friends }) => friends.map(getCharacter),
    friendsConnection: ({ friends }, { first, after }) => {
      first = first || friends.length;
      after = after ? parseInt(fromCursor(after), 10) : 0;
      const edges = friends.map((friend, i) => ({
        cursor: toCursor(i + 1),
        node: getCharacter(friend)
      })).slice(after, first + after);
      const slicedFriends = edges.map(({ node }) => node);
      return {
        edges,
        friends: slicedFriends,
        pageInfo: {
          startCursor: edges.length > 0 ? edges[0].cursor : null,
          hasNextPage: first + after < friends.length,
          endCursor: edges.length > 0 ? edges[edges.length - 1].cursor : null
        },
        totalCount: friends.length
      };
    },
    appearsIn: ({ appearsIn }) => appearsIn,
  },
  FriendsConnection: {
    edges: ({ edges }) => edges,
    friends: ({ friends }) => friends,
    pageInfo: ({ pageInfo }) => pageInfo,
    totalCount: ({ totalCount }) => totalCount,
  },
  FriendsEdge: {
    node: ({ node }) => node,
    cursor: ({ cursor }) => cursor,
  },
  Starship: {
    length: ({ length }, { unit }) => {
      if (unit === 'FOOT') {
        return length * 3.28084;
      }

      return length;
    },
    coordinates: () => {
      return [[1, 2], [3, 4]];
    }
  },
  SearchResult: {
    __resolveType(data, context, info) {
      if (getHuman(data.id)) {
        return info.schema.getType('Human');
      }
      if (getDroid(data.id)) {
        return info.schema.getType('Droid');
      }
      if (getStarship(data.id)) {
        return info.schema.getType('Starship');
      }
      return null;
    },
  },
}

export default resolvers;