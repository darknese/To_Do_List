<script lang="ts" setup>
import { computed, ref } from "#imports";
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";

const title = ref<string>(" ");
const field = ref<string>(" ");

const ALLTODO = gql`
  query alltodo {
    alltodo {
      id
      field
      title
    }
  }
`;

const { mutate: add } = useMutation(
  gql`
    mutation createToDo($title: String!, $field: String!) {
      createToDo(data: { title: $title, field: $field }) {
        id
        title
        field
      }
    }
  `,
  () => ({
    variables: {
      title: title.value,
      field: field.value,
    },
    update: (cache, { data: { createToDo } }) => {
      let data = cache.readQuery<any>({ query: ALLTODO });
      data = {
        alltodo: [...data.alltodo, add],
      };
      cache.writeQuery({ query: ALLTODO, data });
    },
  })
);
</script>
<template lang="pug">
div
  v-row
    v-col
    v-col
      v-card(class="card_add")
        v-toolbar(color="primary" )
          v-toolbar-title Создание задачи
          v-btn(@click =" $emit('add')") Вернуться к задачам
        v-text-field(v-model="title" label="Название" single-line)
        v-textarea(v-model="field" label="Описание" single-line)
        v-row
          v-col
          v-col
          v-col
          v-col
          v-col
            v-btn(@click="add(), $emit('add')" color="success") Создать
    v-col
</template>

<style>
.card_add {
  max-width: 700px;
  variant: outlined;
}
</style>
