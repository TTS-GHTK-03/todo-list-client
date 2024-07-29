import axios from "axios";
import { useAuthStore } from '../stores/authStores/authStore'; // Cập nhật đường dẫn đúng tới store

var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3MzhkY2VkMS04NzYxLTQ3NjgtOTE0YS1kMDUyYzk0MjBhNmIiLCJleHAiOjE3MjIyMjkwNzUsImlhdCI6MTcyMjIyNTQ3NSwiZW1haWwiOiJsdWFuaGFuMTAwMUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6Imx1YW4xIn0.wtyN_KCiI4PXrPTaLq4HTFrsZ_n0VtRwQl3JmZQzgFE"
    
const apiClient = axios.create({
  baseURL: "https://moose-helping-dog.ngrok-free.app/api/v1",
  // baseURL: "http://localhost:8080/api/v1",
  headers: {
    // Authorization: `Bearer ${token}`, 
    "Content-Type": "application/json",
  },
});

// Request interceptor để thêm token vào header
apiClient.interceptors.request.use(
  (request) => {
    const authStore = useAuthStore();
    const token = authStore.accessToken;

    if (token) {
      request.headers['Authorization'] = `Bearer ${token}`;
    }

    console.log("Starting Request", request);
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    console.log("Response:", response);
    return response;
  },
  (error) => {
    console.error("Error Response:", error.response);

    const authStore = useAuthStore();
    // if (error.response && error.response.status === 401) {
    //   authStore.logout();
    // }

    return Promise.reject(error);
  }
);

export default apiClient;
