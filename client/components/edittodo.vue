<script lang="ts" setup>
import { computed, ref, toRef } from "#imports";
import { useMutation, useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export type ToDo = {
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
    ) {
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
div
  v-row
    v-col
    v-col
      v-card(class="card_add")
        v-toolbar(color="primary" )
          v-toolbar-title Edit todo
          v-btn(@click =" $emit('edi')") Вернуться к задачам
        v-text-field(v-model="title" single-line)
        v-textarea(v-model="field" single-line)
        v-row
          v-col
          v-col
          v-col
          v-col
          v-col
            v-btn(@click="edit({id:todo.id, title: title, field: field}), $emit('edi')" color="success") Изменить
    v-col
</template>

<style>
.card_add {
  max-width: 700px;
  variant: outlined;
}
</style>
