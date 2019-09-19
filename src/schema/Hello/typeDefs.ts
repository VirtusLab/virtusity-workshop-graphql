import { gql } from 'apollo-server';

// Construct a schema, using GraphQL schema language
export default gql`
  extend type Query {
    hello(name: String): String!
  }
`;
