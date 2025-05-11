import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    user: null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token && !!state.user,
    userName: (state) => state.user?.name || '',
  },

  actions: {
    setAuth({ token, user }) {
      this.token = token;
      this.user = user;
    },
    logout() {
      this.token = null;
      this.user = null;
    },
  },

  persist: {
    storage: localStorage,
  },
});
