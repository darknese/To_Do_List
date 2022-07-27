import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    'vuetify/lib/styles/main.css',
    // 'mdi/css/materialdesignicons.min.css'
  ],
  vite: {
    define: {
      'process.env.DEBUG': 'false'
    }
  },
  build: {
    transpile: [
      'vuetify',
      '@apollo/client',
      'ts-invariant/process',
    ]
  }
})
