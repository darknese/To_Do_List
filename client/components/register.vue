<script lang="ts" setup>
import { ref } from "#imports"
import gql from 'graphql-tag'
import { useQuery} from "@vue/apollo-composable"

const username = ref<string>('')
const password = ref<string>('')
const email = ref<string>('')


</script>

<template lang="pug">
v-row
  v-col
  v-col
    v-card(class="card")
      v-card-title.text-center Вход
      v-card-text
        v-text-field(v-model="username" label="Username")
        v-text-field(v-model="password" label="Password")
        v-text-field(v-model="email" label="Email" )
      v-card-actions
         v-btn(color="primary" @click="$emit('back')") GoBack
         v-spacer
         v-btn(color="primary") Register
  v-col
</template>

<style>
.card{
  margin-top: 50px;
  width: 350px;
  border-color: darkmagenta;
}
</style>
