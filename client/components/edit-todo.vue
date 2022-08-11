<script lang="ts" setup>
import { ref } from "#imports";
import { useMutation } from "@vue/apollo-composable";
import Update from "~/gql/todo/mutations/update.graphql";

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

const { mutate: edit } = useMutation(Update);
</script>
<template lang="pug">
v-card
  v-text-field(v-model="title" label="Название" single-line)
  v-textarea(v-model="field" label="Описание" single-line)
  v-btn(@click="$emit('edi')" color="error") Не сохранять
  v-btn(@click="edit({id:todo.id, title: title, field: field}), $emit('edi') " color="success") Сохранить
</template>
