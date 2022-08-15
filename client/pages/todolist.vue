<script lang="ts" setup>
import { useMutation, useQuery } from "@vue/apollo-composable";
import { computed, ref } from "#imports";
import Addtodo from "~/components/add-todo.vue";
import Edittodo from "~/components/edit-todo.vue";
import { useUserStore } from "~/stores/userstore";
import Alltodo from "~/gql/todo/queries/alltodo.graphql";
import DeleteToDo from "~/gql/todo/mutations/delete.graphql";

const router = useRouter();
const store = useUserStore();
if (!store.name) {
  router.push("/login");
}

const { result: todosData } = useQuery(Alltodo, { id: store.id });
const todos = computed(() => todosData.value?.alltodo ?? []);
const flagEdit = ref<boolean>(false);

const { mutate: Del } = useMutation(DeleteToDo, () => ({
  update: (cache, { data: { deleteToDo } }) => {
    let data = cache.readQuery<any>({
      query: Alltodo,
      variables: { id: store.id },
    });
    console.log(data);
    data = {
      alltodo: data.alltodo.filter((todo) => todo.id != deleteToDo[0].id),
    };
    cache.writeQuery({ query: Alltodo, variables: { id: store.id }, data });
  },
}));

const tab = ref<string>("1");
</script>

<template lang="pug">
div(if="todos")
  v-card
    v-toolbar(color="primary")
      pre hello {{ store.name }}
    div(class="d-flex flex-row")
      v-tabs(v-model="tab" direction="vertical" color="primary" )
        v-tab(v-for="todo in todos" :value="todo.id") {{ todo.title }}
        v-tab.text-center(value="add") +
      v-window(v-model="tab")
        v-window-item(v-for="todo in todos" :value="todo.id")
          p(v-if="!flagEdit")
            p {{todo.field}}
            p.ma-10.ma-lg-5
              v-btn(@click="flagEdit = true") Изменить
              v-spacer
              v-btn.justify-end(@click="Del({id: todo.id})") Удалить
          p(v-if="flagEdit" )
            edittodo(:todo="todo" @edi="flagEdit = false")
        v-window-item(value="add")
          addtodo
</template>
