import { ApolloServer, gql } from 'apollo-server';

import { Resolvers } from './schema/types';

const typeDefs = gql`
  type Query {
    hello(name: String): String!
  }
`;

const resolvers: Resolvers = {
  Query: {
    hello: (parent, { name }) => `Hello ${name || 'World'}!`,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
