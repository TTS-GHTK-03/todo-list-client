// src/api/projects.ts
import apiClient from "../api/index";
import { useProjectRoleStore } from '../stores/projectStores/projectStore'; 

export interface UserProject {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  role: string;
}

export interface UserProjectResponse {
  status: number;
  timestamp: string;
  data: UserProject[];
}

export const fetchAllUserByProjects = async (): Promise<UserProjectResponse> => {
  try {
    const projectRoleStore = useProjectRoleStore()
    const idProject = projectRoleStore.idProject
      
    if (!idProject) {
      throw new Error("Project ID is not defined");
    }
    const response = await apiClient.get<UserProjectResponse>(`/users/projects/${idProject}`);
    console.log("fetchAllUserByProjects (response): ", response)
    return response.data;
  } catch (error: any) {
    if (error.response) {
      if (error.response.status === 401) {
        throw new Error("Unauthorized: Invalid or expired access token");
      } else {
        throw new Error("An error occurred while fetching projects");
      }
    } else {
      throw new Error("An error occurred while fetching projects");
    }
  }
};
