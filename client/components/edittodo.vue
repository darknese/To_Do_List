<script lang="ts" setup>
import {computed, ref} from "#imports";
import {useMutation, useQuery} from "@vue/apollo-composable";
import gql from "graphql-tag";

const title = ref<string>("title")
const field = ref<string>(" ")

const { mutate: add } = useMutation(gql`
  mutation createtodo($title: String!, $field: String!){
    createToDo(data: {title: $title, field: $field}){
        id
        title
    }
  }
`)

const { result: todo } = useQuery(gql`
    query($id:ID){
        todo(pk:$id)
    }
`)
const props = defineProps({
  id: String
})
const create = () =>{
    console.log(title.value)
    //add({title: title, field: field})
}
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
        v-text-field(v-model="title" label="hell" single-line)
        pre {{ id }}
        v-textarea(v-model="field" label="Описание" single-line)
        v-row
          v-col
          v-col
          v-col
          v-col
          v-col
            v-btn(@click="add({title: title, field: field})" color="success") Изменить
    v-col
</template>

<style>
.card_add{
  max-width: 700px;
  variant: outlined;
}
</style>
