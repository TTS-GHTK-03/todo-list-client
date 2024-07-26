// src/api/projects.ts
import apiClient from "../api/index";

export interface Project {
  id: string;
  createdAt: string;
  lastUpdatedAt: string;
  title: string;
  keyProject: string;
}

export interface ProjectsResponse {
  status: number;
  timestamp: string;
  data: Project[];
}

export const fetchAllProjects = async (): Promise<ProjectsResponse> => {
  try {
    const response = await apiClient.get<ProjectsResponse>("/projects");
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
