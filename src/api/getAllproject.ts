// src/api/projects.ts
import apiClient from "../api/index";

export interface UserName {
  firstName: string;
  middleName: string;
  lastName: string;
}

export interface ProjectInformation {
  id: string;
  title: String;
  keyProject: string;
  roleUser: string;
  userNameResponseList: UserName[]
}

export interface ProjectInformationResponse {
  status: number;
  timestamp: string;
  data: ProjectInformation[];
}

export const fetchAllProjects = async (): Promise<ProjectInformationResponse> => {
  try {
    const response = await apiClient.get<ProjectInformationResponse>("/projects");
    console.log("fetchAllProjects (response): ", response)
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
