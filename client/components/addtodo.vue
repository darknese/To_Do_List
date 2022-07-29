<script lang="ts" setup>
import {ref} from "#imports";
import {useMutation} from "@vue/apollo-composable";
import gql from "graphql-tag";

const { mutate: add } = useMutation(gql`
  mutation createtodo($title: String, $field: String) {
    createToDo(data: {title: $title, field: $field})
  }
`)

const create = () =>{
  if (title && field){
    add({title: title.value, field: field.value})
  }
}
const title = ref<string>(" ")
const field = ref<string>(" ")
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
        v-btn(@click="create" color="success" ) Создать
    v-col
</template>

<style>
.card_add{
  max-width: 700px;
  variant: outlined;
}
</style>
