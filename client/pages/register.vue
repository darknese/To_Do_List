<script lang="ts" setup>
import { ref } from "#imports";
import gql from "graphql-tag";
import {useMutation, useQuery} from "@vue/apollo-composable";

const username = ref<string>("");
const password = ref<string>("");
const email = ref<string>("");
const l = ref<string>("")

const { mutate: register } = useMutation(gql`
    mutation register($username:String!, $password: String!, $email: String!){
        register(data: {username: $username, password: $password, email: $email}){
            username
        }
    }
`)
const reg = async () => {
  if (password.value.length < 8){
    l.value = " Пароль короче 8 символов "
  }else {
    l.value = " "
    const user = await register({username: username.value, password: password.value, email: email.value})
    console.log( user )
  }
}
</script>

<template lang="pug">
v-row
  v-col
  v-col
    v-card
      v-card-title.text-center Вход
      v-card-text
        v-text-field(v-model="username" label="Username")
        v-text-field(v-model="password" label="Password")
        v-card-text(v-if="l.length > 1" ) {{ l }}
        v-text-field(v-model="email" label="Email" )
      v-card-actions
         v-btn(color="primary" to="/login") GoBack
         v-spacer
         v-btn(color="primary" @click="reg") Register
  v-col
</template>
