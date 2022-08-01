<script lang="ts" setup>
import Login from '~/components/login.vue'
import Register from '~/components/register.vue'
import Todolist from '~/components/todolist.vue'
import { ref } from "#imports"
import Addtodo from '~/components/addtodo.vue'
import Edittodo from "~/components/edittodo.vue";

// const reg = ref<boolean>(false)
// const log = ref<boolean>(true)
const add = ref<boolean>(false)
const edi = ref<boolean>(false)
const todo_id = ref<string>("12")
</script>

<template lang="pug">
v-container
  //v-row(v-if="!log")
  //  v-col(v-if="reg")
  //    register(@back="reg=false")
  //  v-col(v-else)
  //    login(@reg="reg=true")
  v-row(v-if="add")
    v-col
      addtodo(@add = "add = false")
  v-row(v-else-if="edi")
    v-col
      edittodo(@edi="edi=false" id="12")
  v-row(v-else)
    v-col
      todolist(@add="add=true" @edi="edi=true, console.log(args)")

</template>
