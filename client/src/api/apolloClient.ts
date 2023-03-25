import { ApolloClient, InMemoryCache } from "@apollo/client";
import { apolloLink } from "./apolloLink";

export const apolloClient = new ApolloClient({
  uri: "http://localhost:3001/",
  cache: new InMemoryCache(),
  link: apolloLink,
});
