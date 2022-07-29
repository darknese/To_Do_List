<script lang="ts" setup>
import { useMutation, useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const { mutate: logout } = useMutation(gql`
  mutation Logout {
    logout
  }
`);

const exit = () => {
  logout();
};
</script>

<template lang="pug">
v-app
  v-app-bar(app)
    pre ToDoList
    v-btn(class="button" @click="logout") Logout
  v-main
    slot
</template>

<style>
.button {
  margin-left: 1050px;
}
</style>
