import { Resolvers } from '../types';

// Provide resolver functions for your schema fields
const resolvers: Resolvers = {
  Query: {
    hello: () => 'Hello World!',
  },
};

export default resolvers;
