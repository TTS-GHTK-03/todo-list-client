import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://moose-helping-dog.ngrok-free.app/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((request) => {
  console.log("Starting Request", request);
  return request;
});

apiClient.interceptors.response.use(
  (response) => {
    console.log("Response:", response);
    return response;
  },
  (error) => {
    console.error("Error Response:", error.response);
    return Promise.reject(error);
  }
);

export default apiClient;
