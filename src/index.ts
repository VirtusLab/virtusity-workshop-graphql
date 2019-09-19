import { ApolloServer } from 'apollo-server';

import schema from './schema';

const server = new ApolloServer({
  schema,
  debug: true,
  tracing: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
