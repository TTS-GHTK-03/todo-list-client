// src/store/projects.ts
import { defineStore } from 'pinia';
import { fetchAllProjects } from '../../api/getAllproject';
import { fetchProjectRole } from '../../api/getProjectRole';

interface ProjectState {
  projects: any[] ; // Đổi kiểu projects thành any[]
  error: string | null;
}

interface ProjectRoleState {
  project: {} ; 
  idProject: string | null;
  roleUser: string | null;
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


export const useProjectRoleStore = defineStore('projectRole', {
  state: (): ProjectRoleState => ({
    project: {},
    idProject: localStorage.getItem('idProject') || null,
    roleUser: localStorage.getItem('roleUser') || null,
    error: null,
  }),
  actions: {
    async loadProjectRole() {
      try {
        const response = await fetchProjectRole();
        this.idProject = response.data.id;
        this.roleUser = response.data.roleUser;
        this.project = response.data; 
        this.error = null;

        localStorage.setItem('idProject', this.idProject);
        localStorage.setItem('roleUser', this.roleUser);
      } catch (error: any) {
        this.error = error.message;
      }
    },
  },
});