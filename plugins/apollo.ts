import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client/core'

import {
  DefaultApolloClient,
  provideApolloClient,
} from '@vue/apollo-composable'

import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const httpLink = createHttpLink({
    uri: import.meta.env.VITE_GRAPHQL_HTTP_ENDPOINT as string,
    headers: {
      Authorization: `bearer ${import.meta.env.VITE_GITHUB_KEY}`,
    },
  })

  const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  })

  provideApolloClient(apolloClient)
  nuxtApp.provide('apllo', { DefaultApolloClient, apolloClient })
})
