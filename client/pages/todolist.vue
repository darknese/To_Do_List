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

const { result: todos, loading } = useQuery(ALLTODO);

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


const tab = ref<string>("1");
</script>

<template lang="pug">
div(if="!loading")
  v-card
    v-toolbar(color="primary" )
      v-toolbar-title ToDoList
      v-btn(@click ="") Создать
    div(class="d-flex flex-row")
      pre {{todos}}
      v-tabs(v-model="tab" direction="vertical" color="primary" )
        v-tab(v-for="todo in todos.alltodo" :value="todo.id") {{ todo.title }}
        //v-tab.text-center(value="add") +
      v-window(v-model="tab")
        v-window-item(v-for="todo in todos.alltodo" :value="todo.id")
          v-card
            v-card-text
              p {{todo.field}}
              p.ma-10.ma-lg-5
                v-row.justify-end
                  v-btn(@click="") Edit
                  v-btn(@click="Del({id: todo.id})") Delete
        //v-window-item(value="add")
        //v-card
        //  v-card-text
        //    p addddd

</template>
