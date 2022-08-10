import { defineStore } from "pinia";
import {param} from "change-case";

export const useUserStore = defineStore("UserStore", {
  state: () => ({
    name: '',
    isActive: false
  }),
  actions:{
    logout(){
      this.$patch({
        name: '',
        isActive: false
      })
    },
    login(user) {
      this.$patch({
        name: user,
        isActive: true
      })
    }
  }
})
