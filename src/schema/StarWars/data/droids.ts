import {
  Character,
  Droid,
  Episode,
  FriendsConnection,
} from '../../types';

export interface DroidData extends Droid {
  readonly friendsIds: string[];
}

const data: DroidData[] = [
  {
    id: '2000',
    name: 'C-3PO',
    friendsIds: ['1000', '1002', '1003', '2001'],
    appearsIn: [Episode.NEWHOPE, Episode.EMPIRE, Episode.JEDI],
    primaryFunction: 'Protocol',
  },
  {
    id: '2001',
    name: 'R2-D2',
    friendsIds: ['1000', '1002', '1003'],
    appearsIn: [Episode.NEWHOPE, Episode.EMPIRE, Episode.JEDI],
    primaryFunction: 'Astromech',
  },
].map((droid) => ({
  ...droid,
  // it's to satisfy TS types, as DroidData is a little bit different then Droid
  friendsConnection: undefined as unknown as FriendsConnection,
  friends: undefined as unknown as Array<Character>,
}));

export default data;
