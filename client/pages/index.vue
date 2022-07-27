<script lang="ts" setup>
import Login from "~/components/login.vue"
import Register from '~/components/register.vue'
import TodoList from '~/components/todolist.vue';
import { ref } from "#imports"

const reg = ref<boolean>(false)
const log = ref<boolean>(false)
</script>


<template lang="pug">
v-container
  v-row(v-if="!log")
    v-col(v-if="reg")
      register(@back="reg=false")
    v-col(v-else)
      login(@reg="reg=true")
  v-row(v-else)
    v-col
      todolist
</template>

