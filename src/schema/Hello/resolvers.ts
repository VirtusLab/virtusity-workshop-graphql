import { Resolvers } from '../types';

// Provide resolver functions for your schema fields
const resolvers: Resolvers = {
  Query: {
    hello: (root, { name }): string => `Hello ${name || 'World'}!`,
  },
};

export default resolvers;
