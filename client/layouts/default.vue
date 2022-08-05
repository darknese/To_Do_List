<script lang="ts" setup>
import { useMutation, useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

</script>

<template lang="pug">
v-app
  v-app-bar(app)
    pre ToDoList
    v-spacer
    NuxtLink(to="/login") login
  v-main
    slot
</template>

<style>
.button {
  margin-left: 1050px;
}
</style>
