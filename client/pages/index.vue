<script lang="ts" setup>
import { ref } from "#imports";
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
//
// const search = (elem) => {
//   return elem ? elem.id == todo_id.value : false;
// };
</script>

<template lang="pug">
nuxt-loading-indicator
v-card
  v-card-text ToDo
//v-container(v-if="!loading" )
//  v-row(v-if="user == null")
//    v-col(v-if="reg")
//      register(@back="reg=false")
//    v-col(v-else)
//      login(@reg="reg=true")
//  v-row(v-else-if="add")
//    v-col
//      addtodo(@add = "add = false")
//  v-row(v-else-if="edi")
//    v-col
//      edittodo(@edi="edi=false" :todo="todos.alltodo.find(search)")
//  v-row(v-else)
//    v-col
//      todolist(@add="add=true" :todos="todos.alltodo" @edit="todo_id = $event, edi=true")
</template>
