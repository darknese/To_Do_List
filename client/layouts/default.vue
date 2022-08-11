<script lang="ts" setup>
import { useRouter } from "#app";
import { useUserStore } from "~/stores/userstore";

const router = useRouter();
const store = useUserStore();
</script>

<template lang="pug">
v-app
  v-app-bar(app)
    pre ToDoList
    v-spacer
    v-btn(color="success" @click="router.push('/login'), store.logout()") Сменить пользователя
  v-main
    slot
</template>
