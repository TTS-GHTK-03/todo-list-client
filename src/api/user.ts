// // src/api/projects.ts
// import apiClient from "../api/index";

// export interface User {
//     id: string,
//     firstName: string,
//     middleName: string,
//     lastName: string,
//     email: string,
//     phone: string,
//     dateOfBirth: string,
//     gender: string,
//     address: string,
// }
  
  
// export interface ListTaskResponse {
//     status: number;
//     timestamp: string;
//     data: User[];
// }


// export const createNewTask = async (newtitle : string): Promise<TaskResponse> => {
//     try {
//         const projectRoleStore = useProjectRoleStore()
//         const idProject = projectRoleStore.idProject
//         if (!idProject) {
//             throw new Error("Project ID is not defined");
//         }
       
//         const response = await apiClient.post<TaskResponse>(`/projects/${idProject}/tasks`,
//             {title: newtitle}
//         );
//         return response.data;
//     } catch (error: any) {
//         if (error.response) {
//             if (error.response.status === 401) {
//             throw new Error("Unauthorized: Invalid or expired access token");
//             } else {
//             throw new Error("An error occurred while fetching projects");
//             }
//         } else {
//             throw new Error("An error occurred while fetching projects");
//         }
//     }
// };
