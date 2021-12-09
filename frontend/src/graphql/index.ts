import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

export const link = createHttpLink({
  uri: "http://localhost:4000",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
