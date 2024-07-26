import { defineStore } from 'pinia';
import { login, LoginResponse } from '../../api/auth';

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  accessTokenLifeTime: string | null;
  refreshTokenLifeTime: string | null;
  loginTimestamp: number | null;
  error: string | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    accessToken: null,
    refreshToken: null,
    accessTokenLifeTime: null,
    refreshTokenLifeTime: null,
    loginTimestamp: null,
    error: null,
  }),
  actions: {
    async login(credentials: { username: string; password: string }) {
      try {
        const response = await login(credentials);
        this.loginTimestamp = response.timestamp;
        this.accessToken = response.data.accessToken;
        console.log(this.accessToken);
        this.refreshToken = response.data.refreshToken;
        this.accessTokenLifeTime = response.data.accessTokenLifeTime;
        this.refreshTokenLifeTime = response.data.refreshTokenLifeTime;
        this.error = null;
      } catch (error: any) {
        this.error = error.message;
      }
    },
    logout() {
      this.loginTimestamp = null;
      this.accessToken = null;
      this.refreshToken = null;
      this.accessTokenLifeTime = null;
      this.refreshTokenLifeTime = null;
    },
    isLoggedIn(): boolean {
      return !!this.accessToken; 
    }
  },
});
