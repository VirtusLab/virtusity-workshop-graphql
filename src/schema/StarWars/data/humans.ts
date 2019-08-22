import { Human } from "../../types";

interface HumanData extends Omit<Human, 'friends' | 'appearsIn' | 'friendsConnection' | 'starships'> {
  readonly friendsIds: string[];
  readonly appearsInIds: string[];
  readonly starshipsIds: string[];
}

const data: HumanData[] = [{
  "id": "1000",
  "name": "Luke Skywalker",
  "friendsIds": ["1002", "1003", "2000", "2001"],
  "appearsInIds": ["NEWHOPE", "EMPIRE", "JEDI"],
  "homePlanet": "Tatooine",
  "height": 1.72,
  "mass": 77,
  "starshipsIds": ["3001", "3003"]
}, {
  "id": "1001",
  "name": "Darth Vader",
  "friendsIds": ["1004"],
  "appearsInIds": ["NEWHOPE", "EMPIRE", "JEDI"],
  "homePlanet": "Tatooine",
  "height": 2.02,
  "mass": 136,
  "starshipsIds": ["3002"]
}, {
  "id": "1002",
  "name": "Han Solo",
  "friendsIds": ["1000", "1003", "2001"],
  "appearsInIds": ["NEWHOPE", "EMPIRE", "JEDI"],
  "height": 1.8,
  "mass": 80,
  "starshipsIds": ["3000", "3003"]
}, {
  "id": "1003",
  "name": "Leia Organa",
  "friendsIds": ["1000", "1002", "2000", "2001"],
  "appearsInIds": ["NEWHOPE", "EMPIRE", "JEDI"],
  "homePlanet": "Alderaan",
  "height": 1.5,
  "mass": 49,
  "starshipsIds": []
}, {
  "id": "1004",
  "name": "Wilhuff Tarkin",
  "friendsIds": ["1001"],
  "appearsInIds": ["NEWHOPE"],
  "height": 1.8,
  "mass": null,
  "starshipsIds": []
}];

export default data;
