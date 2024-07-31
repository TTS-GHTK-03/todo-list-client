// src/store/projects.ts
import { defineStore } from 'pinia';
import { fetchAllProjects, fetchProjectRole, fetchCreateProject } from '../../api/project';

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

//createProject
export const useCreateProjectStore = defineStore('createProject', {
  state: (): ProjectRoleState => ({
    project: {},
    idProject: localStorage.getItem('idProject') || null,
    roleUser: localStorage.getItem('roleUser') || null,
    error: null,
  }),
  actions: {

    async createProject(credentials: { title: string }) {
      try {
        const response = await fetchCreateProject(credentials);
        this.idProject = response.data.id;
        this.project = response.data; 
        this.error = null;

        localStorage.setItem('idProject', this.idProject);
        localStorage.setItem('roleUser', "ADMIN");
      } catch (error: any) {
        this.error = error.message;
      }
    },
  },
});

// getAllProject
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

// getDetailProjectRole
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