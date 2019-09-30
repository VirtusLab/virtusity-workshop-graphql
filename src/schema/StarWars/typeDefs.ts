import { gql } from 'apollo-server';

export default gql`
  scalar Stars
  
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

  enum Episode {
    NEWHOPE # Star Wars Episode IV: A New Hope, released in 1977.
    EMPIRE # Star Wars Episode V: The Empire Strikes Back, released in 1980.
    JEDI # Star Wars Episode VI: Return of the Jedi, released in 1983.
    PHANTOM # Star Wars Episode I
    CLONES # Star Wars Episode II
    SITH # Star Wars Episode III
  }
  
  type Review {
    episode: Episode # The movie
    stars: Stars! # The number of stars this review gave, 1-5
    commentary: String # Comment about the movie
  }
  
  input ReviewInput {
    stars: Stars! # 0-5 stars
    commentary: String # Comment about the movie, optional
  }

  extend type Query {
    reviews(episode: Episode!): [Review!]!
    character(id: ID!): Character
    all: [Character!]!
  }
  
  type Mutation {
    createReview(episode: Episode!, review: ReviewInput!): Review
  }
`;
