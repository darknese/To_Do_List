<script lang="ts" setup>
import { useQuery } from "@vue/apollo-composable"
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
      v-window(v-model="tab" flex)
        v-window-item(v-for="todo in todos.alltodo" :value="todo.id")
          v-card(flex)
            v-card-text(flex)
              p {{todo.field}}

</template>

