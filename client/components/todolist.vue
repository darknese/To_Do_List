<script lang="ts" setup>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { ref } from "#imports";

// const todos = ref<any>({})
const { result: todos } = useQuery(gql`
  query {
    alltodo {
      id
      field
      title
    }
  }
`);

const tab = ref<string>('1')
const tab1 = ref<string>('option-1')
const menu = ref<[boolean]>([false]);
</script>

<template lang="pug">
pre {{ todos }}
v-card
  v-toolbar(color="primary" )

    v-toolbar-title ToDoList
  div(class="d-flex flex-row")
    v-tabs(v-model="tab" direction="vertical" color="primary" )
      v-tab(v-for="todo in todos.alltodo" :value="todo.id") {{ todo.title }}
    v-window(v-model="tab")
      v-window-item(v-for="todo in todos.alltodo" :value="todo.id")
        v-card
          v-card-text
            p {{todo.field}}

v-card
  v-toolbar(color="primary" )
    v-toolbar-title ToDo
  div(class="d-flex flex-row")
    v-tabs(v-model="tab1" direction="vertical" color="primary")
      v-tab(value="option-1") Option 1
      v-tab(value="option-2") Option 2
    v-window(v-model="tab1")
      v-window-item(value="option-1")
        v-card(flat)
          v-card-text
            p Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
      v-window-item(value="option-2")
        v-card(flat)
          v-card-text
            p Sdsfaadsfadsfa lkdajgl afdkl aqldfkjg adlfkj adfj

</template>

