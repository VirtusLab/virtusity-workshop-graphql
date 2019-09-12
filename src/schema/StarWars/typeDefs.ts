import { gql } from 'apollo-server';

export default gql`
  type Mutation {
    createReview(episode: Episode!, review: ReviewInput!): Review
  }

 type Subscription {
    reviewAdded(episode: Episode): Review
  }

  extend type Query {
    hero(episode: Episode): Character
    reviews(episode: Episode!): [Review!]!
    search(text: String): [SearchResult!]!
    character(id: ID!): Character
    droid(id: ID!): Droid
    human(id: ID!): Human
    starship(id: ID!): Starship
  }

  enum Episode {
    NEWHOPE # Star Wars Episode IV: A New Hope, released in 1977.
    EMPIRE # Star Wars Episode V: The Empire Strikes Back, released in 1980.
    JEDI # Star Wars Episode VI: Return of the Jedi, released in 1983.
  }

  enum LengthUnit {
    METER  # The standard unit around the world
    FOOT # Primarily used in the United States
  }

  type Starship {
    id: ID! # The ID of the starship
    name: String! # The name of the starship
    length(unit: LengthUnit = METER): Float # Length of the starship, along the longest axis
    coordinates: [[Float!]!]
  }

  interface Character {
    id: ID! # The ID of the character
    name: String! # The name of the character
    friends: [Character!]! # The friends of the character, or an empty list if they have none
    friendsConnection(first: Int, after: ID): FriendsConnection! # The friends of the character exposed as a connection with edges
    appearsIn: [Episode!]! # The movies this character appears in
  }

  type Human implements Character {
    id: ID!
    name: String!
    homePlanet: String  # The home planet of the human, or null if unknown
    height(unit: LengthUnit = METER): Float # Height in the preferred unit, default is meters
    mass: Float # Mass in kilograms, or null if unknown
    friends: [Character!]!
    friendsConnection(first: Int, after: ID): FriendsConnection!
    appearsIn: [Episode!]!
    starships: [Starship!]! # A list of starships this person has piloted, or an empty list if none
  }

  type Droid implements Character {
    id: ID!
    name: String!
    friends: [Character!]!
    friendsConnection(first: Int, after: ID): FriendsConnection!
    appearsIn: [Episode!]!
    primaryFunction: String # This droid's primary function
  }

  type FriendsConnection {
    totalCount: Int # The total number of friends
    edges: [FriendsEdge!]! # The edges for each of the character's friends.
    friends: [Character!]! # A list of the friends, as a convenience when edges are not needed.
    pageInfo: PageInfo! # Information for paginating this connection
  }

  type FriendsEdge {
    cursor: ID! # A cursor used for pagination
    node: Character # The character represented by this friendship edge
  }

  type PageInfo {
    startCursor: ID
    endCursor: ID
    hasNextPage: Boolean!
  }

  type Review {
    episode: Episode # The movie
    stars: Int! # The number of stars this review gave, 1-5
    commentary: String # Comment about the movie
  }

  input ReviewInput {
    stars: Int! # 0-5 stars
    commentary: String # Comment about the movie, optional
  }

  union SearchResult = Human | Droid | Starship
`;
