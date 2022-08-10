<script lang="ts" setup>
import { computed, ref } from "#imports";
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
import {useUserStore} from "~/stores/userstore";

const title = ref<string>("");
const field = ref<string>("");
const store = useUserStore()

const ALLTODO = gql`
  query alltodo($id: ID!) {
    alltodo(filters: {creator: {id: {inList: [$id]}}}){
      id
      title
      field
    }
  }
`;

const { mutate: add } = useMutation(
  gql`
    mutation createToDo($title: String!, $field: String!, $creator_id: ID!) {
      createToDo(data: { title: $title, field: $field, creator: {set: $creator_id}}) {
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
      creator_id: store.id
    },
    update: (cache, { data: { createToDo } }) => {
      let data = cache.readQuery<any>({ query: ALLTODO, variables:{id:store.id} });
      data = {
        alltodo: [...data.alltodo, add],
      };
      cache.writeQuery({ query: ALLTODO, variables:{id:store.id}, data });
    },
  })
);
const createtodo = () => {
  add()
  title.value = ""
  field.value = ""
}
</script>
<template lang="pug">
v-card
  v-text-field(v-model="title" label="Название" single-line)
  v-textarea(v-model="field" label="Описание" single-line)
  v-btn(@click="createtodo" color="success") Создать
</template>

