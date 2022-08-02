import { defineNuxtPlugin } from "#app";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: createHttpLink({
      uri: config.API_ENDPOINT,
    }),
    //other configuration //
  });
  nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient);
});
