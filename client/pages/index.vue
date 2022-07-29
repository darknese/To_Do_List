<script lang="ts" setup>
import Login from '~/components/login.vue'
import Register from '~/components/register.vue'
import Todolist from '~/components/todolist.vue'
import { ref } from "#imports"
import Addtodo from '~/components/addtodo.vue'

const reg = ref<boolean>(false)
const log = ref<boolean>(true)
const add = ref<boolean>(false)
</script>

<template lang="pug">
v-container
  v-row(v-if="!log")
    v-col(v-if="reg")
      register(@back="reg=false")
    v-col(v-else)
      login(@reg="reg=true")
  v-row(v-else-if="add")
    v-col
      addtodo(@add = "add = false")
  v-row(v-else)
    v-col
      todolist(@add="add=true")
</template>
