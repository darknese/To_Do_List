import { defineNuxtPlugin } from "#app";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";

console.log(process.env.API_ENDPOINT);

export default defineNuxtPlugin((nuxtApp) => {
  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: createHttpLink({
      uri: process.env.API_ENDPOINT,
    }),
    //other configuration //
  });
  nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient);
});
