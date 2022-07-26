<script lang="ts" setup>
import { ref } from "#imports"
import gql from 'graphql-tag'
import { useQuery} from "@vue/apollo-composable"

const username = ref<string>('')
const password = ref<string>('')
const email = ref<string>('')


const { result: user } = useQuery(gql`
  query {
    user {
      username
    }
  }
`)
</script>

<template lang="pug">
v-card
  v-card-title.text-center Вход
  v-card-text
    pre {{ user }}
    v-text-field(v-model="username" label="Username")
    v-text-field(v-model="password" label="Password")
  v-card-actions
     v-btn(color="primary") Register
     v-spacer
     v-btn(color="primary") Login
</template>
