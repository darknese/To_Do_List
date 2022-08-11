<script lang="ts" setup>
import { ref } from "#imports";
import { useMutation } from "@vue/apollo-composable";
import { useUserStore } from "~/stores/userstore";
import CreateToDo from "~/gql/todo/mutations/create.graphql";
import AllToDo from "~/gql/todo/queries/alltodo.graphql";

const title = ref<string>("");
const field = ref<string>("");
const store = useUserStore();

const { mutate: add } = useMutation(CreateToDo, () => ({
  variables: {
    title: title.value,
    field: field.value,
    creator_id: store.id,
  },
  update: (cache, { data: { createToDo } }) => {
    let data = cache.readQuery<any>({
      query: AllToDo,
      variables: { id: store.id },
    });
    data = {
      alltodo: [...data.alltodo, add],
    };
    cache.writeQuery({ query: AllToDo, variables: { id: store.id }, data });
  },
}));
const createtodo = () => {
  add();
  title.value = "";
  field.value = "";
};
</script>
<template lang="pug">
v-card
  v-text-field(v-model="title" label="Название" single-line)
  v-textarea(v-model="field" label="Описание" single-line)
  v-btn(@click="createtodo" color="success") Создать
</template>
