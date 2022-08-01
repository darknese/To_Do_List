<script lang="ts" setup>
import {useMutation, useQuery} from "@vue/apollo-composable"
import gql from "graphql-tag"
import { ref } from "#imports"

// const todos = ref<any>({})
const { result: todos, loading } = useQuery(gql`
  query {
    alltodo {
      id
      field
      title
    }
  }
`)
const {mutate: Del} = useMutation(gql`
  mutation delToDo($id: ID!){
    deleteToDo(filters: {id: {inList: [$id]}}){
        id
    }
  }
`)

const tab = ref<string>('1')
const tab1 = ref<string>('option-1')
const menu = ref<[boolean]>([false])
</script>

<template lang="pug">
div
  v-card(v-if="!loading")
    v-toolbar(color="primary" )
      v-toolbar-title ToDoList
      v-btn(@click =" $emit('add')") Создать
    div(class="d-flex flex-row")
      v-tabs(v-model="tab" direction="vertical" color="primary" )
        v-tab(v-for="todo in todos.alltodo" :value="todo.id") {{ todo.title }}
      v-window(v-model="tab")
        v-window-item(v-for="todo in todos.alltodo" :value="todo.id")
          v-card(class="Vue_todo_field")
            v-card-text
              p {{todo.field}}
              p.ma-10.ma-lg-5
                v-row.justify-end
                  v-btn(@click="$emit('edi', todo.id )") Edit
                  v-btn(@click="Del({id: todo.id})") Delete

</template>
<style>
.Vue_todo_field{
}
</style>

