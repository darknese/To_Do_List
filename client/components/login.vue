<script lang="ts" setup>
import { ref, unref } from "#imports"
import ggl from 'graphql-tag'
import axios from 'axios'
import {useQuery} from "@vue/apollo-composable";

const username = ref<string>('')
const password = ref<string>('')
const email = ref<string>('')


const { result:user } = useQuery(ggl`
  query { user {
    username
  }}
`)


</script>
<template lang="pug">
v-card
  v-card-title.text-center Вход
  v-card
    v-text-field(v-model="username" label="Username")
    pre {{ user }}
    v-text-field(v-model="password" label="Password")
  v-row
    v-col
      v-card-actions
        v-btn Register
    v-col.text-right
      v-card-actions
        v-btn Login

</template>
