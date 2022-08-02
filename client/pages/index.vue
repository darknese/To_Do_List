<script lang="ts" setup>
import Login from "~/components/login.vue";
import Register from "~/components/register.vue";
import Todolist from "~/components/todolist.vue";
import { ref } from "#imports";
import Addtodo from "~/components/addtodo.vue";
import Edittodo from "~/components/edittodo.vue";
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";

const reg = ref<boolean>(false)
const log = ref<boolean>(true)
const add = ref<boolean>(false);
const edi = ref<boolean>(false);
const todo_id = ref<string>("");

const ALLTODO = gql`
  query alltodo {
    alltodo {
      id
      field
      title
    }
  }
`;
const { result: todos, loading } = useQuery(ALLTODO);

const search = (elem) => {
  return elem ? elem.id == todo_id.value : false;
};
</script>

<template lang="pug">
v-container(v-if="!loading" )
  v-row(v-if="!log")
    v-col(v-if="reg")
      register(@back="reg=false")
    v-col(v-else)
      login(@reg="reg=true")
  v-row(v-else-if="add")
    v-col
      addtodo(@add = "add = false")
  v-row(v-else-if="edi")
    v-col
      edittodo(@edi="edi=false" :todo="todos.alltodo.find(search)")
  v-row(v-else)
    v-col
      todolist(@add="add=true" :todos="todos.alltodo" @edit="todo_id = $event, edi=true")
</template>
