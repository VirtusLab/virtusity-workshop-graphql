import {
  Droid,
  DroidFunction,
  Human,
  LengthUnit,
  Resolvers,
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
  Query: {
    all: () => data,
    character: (parent, { id }) => Promise.resolve(
      data.find((value) => id === value.id) || null,
    ),
  },
};

export default resolvers;
