// src/api/projects.ts
import apiClient from "../api/index";
import { useProjectRoleStore } from '../stores/projectStores/projectStore'; 

export interface Task {
    id: string;
    title: string;
    point: number;
    status: string;
    keyProjectTask: string;
    userId: string;
    sprintId: string;
    sprintTitle: string;
}
  
  
export interface ListTaskResponse {
    status: number;
    timestamp: string;
    data: Task[];
}


export const fetchAllTaskByAllSprint = async (): Promise<ListTaskResponse> => {
    try {
        const projectRoleStore = useProjectRoleStore()
        const idProject = projectRoleStore.idProject
        if (!idProject) {
            throw new Error("Project ID is not defined");
        }
       
        const response = await apiClient.get<ListTaskResponse>(`/projects/${idProject}/tasks`);
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
  
export const updateStatusTask = async (taskId:string, status:string): Promise<ListTaskResponse> => {
    try {
        const projectRoleStore = useProjectRoleStore()
        const idProject = projectRoleStore.idProject
            
        if (!idProject) {
            throw new Error("Project ID is not defined");
        }
        const response = await apiClient.patch<ListTaskResponse>(`/projects/${idProject}/tasks/${taskId}?statusTask=${status}`);
        console.log("updateStatusTask (response): ", response)
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



export const updatePointTask = async (taskId:string, newPoint:number ): Promise<ListTaskResponse> => {
    try {
        const projectRoleStore = useProjectRoleStore()
        const idProject = projectRoleStore.idProject
            
        if (!idProject) {
            throw new Error("Project ID is not defined");
        }

        const response = await apiClient.patch<ListTaskResponse>(`/projects/${idProject}/tasks/${taskId}/points`, 
            {point: newPoint}

        );
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

export const updateSprintTask = async (taskId:string, newSprintId:string): Promise<ListTaskResponse> => {
    try {
        const projectRoleStore = useProjectRoleStore()
        const idProject = projectRoleStore.idProject
            
        if (!idProject) {
            throw new Error("Project ID is not defined");
        }
        const response = await apiClient.patch<ListTaskResponse>(`/projects/${idProject}/sprints/${newSprintId}/tasks/${taskId}`);
        console.log("updateStatusTask (response): ", response)
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

export const updateTitleTask = async (): Promise<ListTaskResponse> => {
    try {
        const projectRoleStore = useProjectRoleStore()
        const idProject = projectRoleStore.idProject
            
        if (!idProject) {
            throw new Error("Project ID is not defined");
        }
        const response = await apiClient.get<ListTaskResponse>(`/projects/${idProject}/tasks`);
        console.log("fetchAllTaskByAllSprint (response): ", response)
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
  
export const fetchAllTask = async (): Promise<ListTaskResponse> => {
    try {
        const projectRoleStore = useProjectRoleStore()
        const idProject = projectRoleStore.idProject
            
        if (!idProject) {
            throw new Error("Project ID is not defined");
        }
        const response = await apiClient.get<ListTaskResponse>(`/projects/${idProject}/tasks`);
        console.log("fetchAllTaskByAllSprint (response): ", response)
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