import apiClient from "../api/index";
import { useProjectRoleStore } from '../stores/projectStores/projectStore'; 


export interface ProjectRoleResponse {
  status: number;
  timestamp: string;
  data: {
    id: string;
    title: string;
    keyProject: string;
    roleUser: string;
  };
}

export const fetchProjectRole = async (): Promise<ProjectRoleResponse> => {
    try {

      const projectRoleStore = useProjectRoleStore()
      const idProject = projectRoleStore.idProject
      
      if (!idProject) {
        throw new Error("Project ID is not defined");
      }

      const response = await apiClient.get<ProjectRoleResponse>(`/projects/${idProject}`);
      console.log("fetchProjectRole (response): ", response)
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
  