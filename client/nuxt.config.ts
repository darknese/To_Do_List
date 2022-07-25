import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    'vuetify/lib/styles/main.css',
    // 'mdi/css/materialdesignicons.min.css'
  ],
  build: {
    transpile: [
      'vuetify',
      '@apollo/client',
      'ts-invariant/process',
    ]
  },
  plugins: [
    '~/plugins/apollo-client'
  ]
})
