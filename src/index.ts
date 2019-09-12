import { ApolloServer } from 'apollo-server';

import schema from './schema';

const server = new ApolloServer({
  schema,
  debug: true,
  tracing: true,
});

server.listen().then(({ url, subscriptionsUrl }) => {
  console.log(`🚀 Server ready at ${url}`);
  console.log(`🚀 Subscriptions ready at ${subscriptionsUrl}`);
});
