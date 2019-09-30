import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server';

import StarWars from './schema/StarWars';
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

const schema = makeExecutableSchema({
  typeDefs: [
    typeDefs,
    StarWars.typeDefs,
  ],
  resolvers: [
    resolvers,
    StarWars.resolvers,
  ],
});

const server = new ApolloServer({
  schema,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
