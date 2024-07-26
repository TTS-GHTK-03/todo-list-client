// src/store/projects.ts
import { defineStore } from 'pinia';
import { fetchAllProjects,Project } from '../../api/getAllproject';

interface ProjectState {
  projects: any[] ; // Đổi kiểu projects thành any[]
  error: string | null;
}

export const useProjectStore = defineStore('projects', {
  state: (): ProjectState => ({
    projects: [],
    error: null,
  }),
  actions: {
    async loadProjects() {
      try {
        const response = await fetchAllProjects();
        this.projects = response.data; // Không cần ép kiểu vì đã là any
        this.error = null;
      } catch (error: any) {
        this.error = error.message;
      }
    },
  },
});