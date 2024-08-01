import apiClient from "../api/index";
import { useProjectRoleStore } from '../stores/projectStores/projectStore'; 


//update role
export interface RoleProjectUserRequest {
    memberId: string,
    role: string,
}

export interface RoleProjectUserResponse {
    status: number;
    timestamp: string;
    data: string
}

export const updateRoleProjectUser = async (credentials: RoleProjectUserRequest): Promise<RoleProjectUserResponse> => {
    try {

        const projectRoleStore = useProjectRoleStore()
        const idProject = projectRoleStore.idProject
            
        if (!idProject) {
            throw new Error("Project ID is not defined");
        }
        const response = await apiClient.put<RoleProjectUserResponse>(
            `/projects/${idProject}/role`,
            credentials
        );
        return response.data;
    } catch (error: any) {
        // catch chưa xử lý
        if (error.response) {
            if (error.response.status === 404) {
            throw new Error("Project does not exist");
            } else if (error.response.status === 400) {
            throw new Error("Invalid password");
            } else {
            throw new Error("An error occurred while trying to log in");
            }
        } else {
            throw new Error("An error occurred while trying to log in");
        }
    }
};

// Accept invitation
export interface AcceptInviteResponse {
    status: number;
    timestamp: string;
    data: string
}

export const acceptInvite = async (emailEncode: string, projectId: string): Promise<AcceptInviteResponse> => {
    try {
        const response = await apiClient.get<AcceptInviteResponse>(`/accept?emailEncode=${emailEncode}&projectId=${projectId}`);
        return response.data;
    } catch (error: any) {
        // catch chưa xử lý
        if (error.response) {
            if (error.response.status === 404) {
            throw new Error("Project does not exist");
            } else if (error.response.status === 400) {
            throw new Error("Invalid password");
            } else {
            throw new Error("An error occurred while trying to log in");
            }
        } else {
            throw new Error("An error occurred while trying to log in");
        }
    }
};