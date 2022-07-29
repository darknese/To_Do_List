<script lang="ts" setup>
import { ref } from "#imports";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { defineEmits } from "vue-demi";

const username = ref<string>("");
const password = ref<string>("");
const email = ref<string>("");

const { mutate: login } = useMutation(gql`
  mutation Login($username: String, $password: String) {
    login(username: $username, password: $password) {
      username
    }
  }
`);

const { result: todos } = useQuery(gql`
  query {
    alltodo {
      id
      field
      title
    }
  }
`);

const logining = async () => {
  const a = await login({ username: username.value, password: password.value });
};
</script>

<template lang="pug">
v-row
  v-col
  v-col
    v-card
      v-card-title.text-center Вход
      pre {{ todos }}
      v-card-text
        v-text-field(v-model="username" label="Username")
        v-text-field(v-model="password" label="Password")
      v-card-actions
         v-btn(color="primary" @click="$emit('reg')") Register
         v-spacer
         v-btn(color="primary" @click="logining") Login
  v-col
</template>

