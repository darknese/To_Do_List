import { defineNuxtConfig } from 'nuxt'
import '@nuxt3/apollo-module'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@nuxt3/apollo-module'
  ],
  css: [
    'vuetify/lib/styles/main.css',
    // 'mdi/css/materialdesignicons.min.css'
  ],
  build: {
    transpile: [
      'vuetify',
    ]
  },
  apollo: {
    clientConfigs: {
      default: {
        // see https://www.apollographql.com/docs/react/api/core/ApolloClient/#ApolloClient.constructor
      },
      client1: {
        // another client
      },
      client2: {
        // authentication type
        authenticationType: 'Bearer', // default 'Bearer'
      }
    },
    // Cookie parameters used to store authentication token
    cookieAttributes: {
      /**
       * Define when the cookie will be removed. Value can be a Number
       * which will be interpreted as days from time of creation or a
       * Date instance. If omitted, the cookie becomes a session cookie.
       */
      expires: 7,

      /**
       * Define the path where the cookie is available. Defaults to '/'
       */
      path: '/',

      /**
       * Define the domain where the cookie is available. Defaults to
       * the domain of the page where the cookie was created.
       */
      domain: 'example.com',

      /**
       * A Boolean indicating if the cookie transmission requires a
       * secure protocol (https). Defaults to false.
       */
      secure: false,
    },
  }
})
