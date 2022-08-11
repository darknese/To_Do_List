import { defineNuxtConfig } from "nuxt";
import graphql from "@rollup/plugin-graphql";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    "vuetify/lib/styles/main.css",
    // 'mdi/css/materialdesignicons.min.css'
  ],
  vite: {
    define: {
      "process.env.DEBUG": "false",
    },
    plugins: [graphql()],
  },
  publicRuntimeConfig: {
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
  build: {
    transpile: ["vuetify", "@apollo/client", "ts-invariant/process"],
  },
  buildModules: ["@pinia/nuxt"],
  typescript: {
    tsConfig: {
      compliterOptions: {
        types: ["types"],
      },
    },
  },
  typeCheck: {
    eslint: {
      files: "./**/*.{ts,js,vue}",
    },
  },
});
