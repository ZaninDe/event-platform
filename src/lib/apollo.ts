import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4omuvvk0igd01z497lqf7d7/master',
  cache: new InMemoryCache(),
});
