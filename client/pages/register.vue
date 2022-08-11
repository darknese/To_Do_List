<script lang="ts" setup>
import { ref } from "#imports";
import { useMutation } from "@vue/apollo-composable";
import { useRouter } from "#app";
import Register from "~/gql/users/register.graphql";
import Login from "~/gql/users/login.graphql";
import { useUserStore } from "~/stores/userstore";

const username = ref<string>("");
const password = ref<string>("");
const email = ref<string>("");
const l = ref<string>("");
const router = useRouter();
const store = useUserStore();

const { mutate: register } = useMutation(Register);
const { mutate: login } = useMutation(Login);
const reg = async () => {
  try {
    if (password.value.length < 8) {
      l.value = " Пароль короче 8 символов ";
    } else {
      l.value = " ";
      await register({
        username: username.value,
        password: password.value,
        email: email.value,
      });
      const user = await login({
        username: username.value,
        password: password.value,
      });
      store.login(user.data.login.username, user.data.login.id);
      await router.push("/todolist");
    }
  } catch (e) {
    console.log(e);
    l.value = " Логин или email уже используется ";
  }
};
</script>

<template lang="pug">
v-row
  v-col
  v-col
    v-card
      v-card-title.text-center Вход
      v-card-text
        v-alert(v-if="l.length > 1" type="error" ) {{ l }}
        v-text-field(v-model="username" label="Username")
        v-text-field(v-model="password" label="Password")
        v-text-field(v-model="email" label="Email" )
      v-card-actions
         v-btn(color="primary" to="/login") GoBack
         v-spacer
         v-btn(color="primary" @click="reg") Register
  v-col
</template>
