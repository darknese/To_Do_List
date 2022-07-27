<script lang="ts" setup>
import { ref } from "#imports"
import gql from 'graphql-tag'
import { useQuery, useMutation } from "@vue/apollo-composable"
import { defineEmits } from 'vue-demi';

const username = ref<string>('')
const password = ref<string>('')
const email = ref<string>('')


const { result: user } = useQuery(gql`
    query {
        user{
            username
        }
    }
`)

const { mutate: login } = useMutation(gql`
  mutation Login($username: String, $password: String){
    login(username: $username password: $password){
      username
    }
   }
`)

const logining = () => {
  login({username: username.value, password: password.value})
}

</script>

<template lang="pug">
v-row
  pre {{ user }}
  v-col
  v-col
    v-card(class="card")
      v-card-title.text-center Вход

      v-card-text
        v-text-field(v-model="username" label="Username")
        v-text-field(v-model="password" label="Password")
      v-card-actions
         v-btn(color="primary" @click="$emit('reg')") Register
         v-spacer
         v-btn(color="primary" @click="logining") Login
  v-col
</template>

<style>
.card{
  margin-top: 50px;
  width: 500px;
}
</style>
