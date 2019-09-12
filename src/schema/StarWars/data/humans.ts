import {
  Human,
  Episode,
  Character,
  FriendsConnection,
  Starship,
} from '../../types';

export interface HumanData extends Human {
  readonly friendsIds: string[];
  readonly starshipsIds: string[];
}

const data: HumanData[] = [
  {
    id: '1000',
    name: 'Luke Skywalker',
    friendsIds: ['1002', '1003', '2000', '2001'],
    appearsIn: [Episode.NEWHOPE, Episode.EMPIRE, Episode.JEDI],
    homePlanet: 'Tatooine',
    height: 1.72,
    mass: 77,
    starshipsIds: ['3001', '3003'],
  }, {
    id: '1001',
    name: 'Darth Vader',
    friendsIds: ['1004'],
    appearsIn: [Episode.NEWHOPE, Episode.EMPIRE, Episode.JEDI],
    homePlanet: 'Tatooine',
    height: 2.02,
    mass: 136,
    starshipsIds: ['3002'],
  }, {
    id: '1002',
    name: 'Han Solo',
    friendsIds: ['1000', '1003', '2001'],
    appearsIn: [Episode.NEWHOPE, Episode.EMPIRE, Episode.JEDI],
    height: 1.8,
    mass: 80,
    starshipsIds: ['3000', '3003'],
  }, {
    id: '1003',
    name: 'Leia Organa',
    friendsIds: ['1000', '1002', '2000', '2001'],
    appearsIn: [Episode.NEWHOPE, Episode.EMPIRE, Episode.JEDI],
    homePlanet: 'Alderaan',
    height: 1.5,
    mass: 49,
    starshipsIds: [],
  }, {
    id: '1004',
    name: 'Wilhuff Tarkin',
    friendsIds: ['1001'],
    appearsIn: [Episode.NEWHOPE],
    height: 1.8,
    mass: null,
    starshipsIds: [],
  },
].map((human) => ({
  ...human,
  // it's to satisfy TS types, as HumanData is a little bit different then Human
  friendsConnection: undefined as unknown as FriendsConnection,
  friends: undefined as unknown as Array<Character>,
  starships: undefined as unknown as Array<Starship>,
}));

export default data;
