import { GraphQLScalarType, Kind } from 'graphql';

import {
  Droid,
  DroidFunction,
  Episode,
  Human,
  LengthUnit,
  Resolvers,
  Review,
} from '../types';

const humans: Human[] = [
  {
    id: '1',
    name: 'Darth Vader',
    isVillain: true,
    age: 46,
    height: 2,
    homePlanet: 'Tatooine',
  },
  {
    id: '2',
    name: 'Leia Organa',
    isVillain: false,
    age: 23,
    height: 1.5,
    homePlanet: 'Alderaan',
  },
];

const droids: Droid[] = [
  {
    id: '2000',
    name: 'C-3PO',
    isVillain: false,
    age: 35,
    height: 1.75,
    primaryFunction: DroidFunction.PROTOCOL,
  },
  {
    id: '2001',
    name: 'R2-D2',
    isVillain: false,
    age: 36,
    height: 1.1,
    primaryFunction: DroidFunction.ASTROMECH,
  },
];

const data = [...humans, ...droids];

type Reviews = Record<Episode, Review[]>;
const reviews: Reviews = {
  [Episode.EMPIRE]: [],
  [Episode.JEDI]: [],
  [Episode.NEWHOPE]: [],
  [Episode.CLONES]: [],
  [Episode.PHANTOM]: [],
  [Episode.SITH]: [],
};

function parseStarValue(value: string) {
  const stars = parseInt(value, 10);
  if (!Number.isNaN(stars) && stars >= 0 && stars <= 5) {
    return stars;
  }
  throw new Error('Provide correct star rating (0-5)');
}

const resolvers: Resolvers = {
  Character: {
    __resolveType(character) {
      if (humans.find(({ id }) => character.id === id)) {
        return 'Human';
      }
      if (droids.find(({ id }) => character.id === id)) {
        return 'Droid';
      }

      return null;
    },
    height: ({ height }, { unit }) => (unit === LengthUnit.METER ? height : height * 3.281),
  },
  Stars: new GraphQLScalarType({
    name: 'Stars',
    description: 'Movie rating',
    parseValue: parseStarValue,
    serialize(value: number) {
      return '⭐️'.repeat(value);
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseStarValue(ast.value);
      }

      throw new Error('Star rating should be numeric');
    },
  }),
  Mutation: {
    createReview: (_, { review, episode }) => {
      reviews[episode].push(review);

      return {
        episode,
        ...review,
      };
    },
  },
  Query: {
    all: () => data,
    character: (parent, { id }) => Promise.resolve(
      data.find((value) => id === value.id) || null,
    ),
    reviews: (_, { episode }) => reviews[episode],
  },
};

export default resolvers;
