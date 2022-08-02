<script lang="ts" setup>
import { useMutation, useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { ref } from "#imports";

// const todos = ref<any>({})

const ALLTODO = gql`
  query alltodo {
    alltodo {
      id
      field
      title
    }
  }
`;

const { mutate: Del } = useMutation(
  gql`
    mutation deleteToDo($id: ID!) {
      deleteToDo(filters: { id: { inList: [$id] } }) {
        id
        title
        field
      }
    }
  `,
  () => ({
    update: (cache, { data: { deleteToDo } }) => {
      let data = cache.readQuery<any>({ query: ALLTODO });
      console.log(deleteToDo);
      data = {
        alltodo: data.alltodo.filter((todo) => todo.id != deleteToDo[0].id),
      };
      cache.writeQuery({ query: ALLTODO, data });
    },
  })
);

const props = defineProps<{
  todos: object;
}>();

const emit = defineEmits<{
  (e: "edit", id: string): void;
  (e: "add"): void;
}>();

const tab = ref<string>("1");
const tab1 = ref<string>("option-1");
const menu = ref<[boolean]>([false]);
</script>

<template lang="pug">
div
  v-card
    v-toolbar(color="primary" )
      v-toolbar-title ToDoList
      v-btn(@click =" emit('add')") Создать
    div(class="d-flex flex-row")
      v-tabs(v-model="tab" direction="vertical" color="primary" )
        v-tab(v-for="todo in todos" :value="todo.id") {{ todo.title }}
      v-window(v-model="tab")
        v-window-item(v-for="todo in todos" :value="todo.id")
          v-card(class="Vue_todo_field")
            v-card-text
              p {{todo.field}}
              p.ma-10.ma-lg-5
                v-row.justify-end
                  v-btn(@click="emit('edit', todo.id)") Edit
                  v-btn(@click="Del({id: todo.id})") Delete

</template>
