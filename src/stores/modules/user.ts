import { defineStore } from "pinia";
import piniaPersistConfig from "@/stores/helper/persist";
import { UserState } from "../interface";

export const useUserStore = defineStore({
  id: "inewfit-user",
  state: (): UserState => ({
    token: ""
  }),
  getters: {},
  actions: {
    // Set Token
    setToken(token: string) {
      this.token = token;
    },
    getToken() {
      return this.token;
    }
  },
  persist: piniaPersistConfig("inewfit-user")
});
