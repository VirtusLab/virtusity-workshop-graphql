import { makeExecutableSchema, gql } from 'apollo-server';

import hello from './Hello';
import isoDate from './IsoDate';
import scalars from './Scalars';

const ping = {
  typeDefs: gql`
    type Query {
      ping: String!
    },
  `,
  resolvers: {
    Query: {
      ping: () => 'pong',
    },
  },
};

export default makeExecutableSchema({
  typeDefs: [ping.typeDefs, scalars.typeDefs, isoDate.typeDefs, hello.typeDefs],
  resolvers: [ping.resolvers, scalars.resolvers, isoDate.resolvers, hello.resolvers],
});
