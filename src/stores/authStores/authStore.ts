import { defineStore } from 'pinia';
import { login, LoginResponse } from '../../api/auth';

interface AuthState {
  user: LoginResponse | null;
  error: string | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    error: null,
  }),
  actions: {
    async login(credentials: { username: string; password: string }) {
      try {
        const user = await login(credentials);
        this.user = user;
        this.error = null;
      } catch (error: any) {
        this.error = error.message;
      }
    },
    logout() {
      this.user = null;
    },
    isLoggedIn(): boolean {
      return !!this.user;
    }
  },
});
