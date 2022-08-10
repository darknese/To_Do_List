<script lang="ts" setup>
import { computed, ref, toRef } from "#imports";
import { useMutation, useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

type ToDo = {
  id: string;
  title: string;
  field: string;
};

const props = defineProps<{
  todo: ToDo;
}>();

const title = ref<string>(props.todo.title);
const field = ref<string>(props.todo.field);

const { mutate: edit } = useMutation(gql`
  mutation update($title: String!, $field: String!, $id: ID!) {
    updateToDo(
      filters: { id: { inList: [$id] } }
      data: { title: $title, field: $field }
    ){
      id
      title
      field
    }
  }
`);

const create = () => {
  console.log(title.value);
  //add({title: title, field: field})
};
</script>
<template lang="pug">
v-card
  v-text-field(v-model="title" label="Название" single-line)
  v-textarea(v-model="field" label="Описание" single-line)
  v-btn(@click="$emit('edi')" color="error") Не сохранять
  v-btn(@click="edit({id:todo.id, title: title, field: field}), $emit('edi') " color="success") Сохранить
</template>

