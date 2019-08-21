import { gql } from 'apollo-server';

// Construct a schema, using GraphQL schema language
export default gql`
  scalar Date
  scalar DateTime
  scalar Time
`;
