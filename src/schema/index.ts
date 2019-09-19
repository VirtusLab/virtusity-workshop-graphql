import { makeExecutableSchema, gql } from 'apollo-server';

const hello = {
  typeDefs: gql`
    type Query {
      hello: String!
    },
  `,
  resolvers: {
    Query: {
      hello: () => 'Hello World',
    },
  },
};

export default makeExecutableSchema({
  typeDefs: [hello.typeDefs],
  resolvers: [hello.resolvers],
});
