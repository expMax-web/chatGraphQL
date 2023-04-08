import { ApolloClient, InMemoryCache } from '@apollo/client';
import { apolloLink } from './apolloLink';

export const apolloClient = new ApolloClient({
  link: apolloLink,
  cache: new InMemoryCache(),
});
