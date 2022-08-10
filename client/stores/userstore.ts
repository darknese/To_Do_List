import { defineStore } from "pinia";
import {param} from "change-case";

export const useUserStore = defineStore("UserStore", {
  state: () => ({
    name: '',
    id: '',
    isActive: false
  }),
  actions:{
    logout(){
      this.$patch({
        name: '',
        id: '',
        isActive: false
      })
    },
    login(name, id) {
      this.$patch({
        name: name,
        id: id,
        isActive: true
      })
    }
  }
})
