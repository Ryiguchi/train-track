import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state() {
    return {
      user: null as IUser | null,
    };
  },

  getters: {
    isSignedIn(state) {
      return !!state.user;
    },

    userId(state) {
      return state.user?.id;
    },
  },

  actions: {
    setUser(user: IUser | null) {
      this.user = user;
    },
  },
});
