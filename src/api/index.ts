import axios from "axios";
import { useAuthStore } from '../stores/authStores/authStore'; // Cập nhật đường dẫn đúng tới store
  
const apiClient = axios.create({
  // baseURL: "https://moose-helping-dog.ngrok-free.app/api/v1",
  baseURL: "http://localhost:8080/api/v1",
  headers: {
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
      console.log("Token:", token);
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
