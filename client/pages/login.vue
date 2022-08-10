<script lang="ts" setup>
import { ref } from "#imports";
import gql from "graphql-tag";
import { useMutation } from "@vue/apollo-composable";
import {hasProtocol} from "ufo";
import {useRoute, useRouter} from "#app";
import {useUserStore} from "~/stores/userstore";

const username = ref<string>("");
const password = ref<string>("");
const email = ref<string>("");
const n = ref<boolean>(false)
const router = useRouter()

const { mutate: login } = useMutation(gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      username
    }
  }
`);


const logining =  async () => {
  const user = await login({ username: username.value, password: password.value });
  // console.log(user.data.login)
  if (user.data.login == null){
    n.value=true
  }
  else {
    n.value=false
    store.login(username.value)
    router.push('/todolist')
  }
};

const store = useUserStore()
</script>

<template lang="pug">
v-row
  v-col
  v-col
    v-card
      v-card-title.text-center Вход
      pre {{ store.name }}
      v-card-text
        v-text-field(v-model="username" label="Username")
        v-text-field(v-model="password" label="Password")
      v-card-text(v-if="n") Неверный логин, или пароль
      v-card-actions
         v-btn(color="primary" to="/register") Register
         v-spacer
         v-btn(color="primary" @click="logining") Login
  v-col
</template>
