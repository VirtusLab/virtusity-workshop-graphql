import { gql } from 'apollo-server';

export default gql`
  enum LengthUnit {
    METER
    FOOT
  }
  
  enum DroidFunction {
    PROTOCOL
    ASTROMECH
    BATTLE
    OTHER
  }

  interface Character {
    id: ID!
    name: String!
    isVillain: Boolean!
    age: Int
    height(unit: LengthUnit = METER): Float!
  }
  
  type Human implements Character {
    id: ID!
    name: String!
    isVillain: Boolean!
    age: Int
    height(unit: LengthUnit = METER): Float!
    homePlanet: String
  }
  
  type Droid implements Character {
    id: ID!
    name: String!
    isVillain: Boolean!
    age: Int
    height(unit: LengthUnit = METER): Float!
    primaryFunction: DroidFunction!
  }

  extend type Query {
    character(id: ID!): Character
    all: [Character!]!
  }
`;
