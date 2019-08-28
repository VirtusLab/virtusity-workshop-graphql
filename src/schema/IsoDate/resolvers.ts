import { GraphQLDate, GraphQLDateTime, GraphQLTime } from 'graphql-iso-date';

import { Resolvers } from '../types';

const resolvers: Resolvers = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
  Time: GraphQLTime,
};

export default resolvers;
