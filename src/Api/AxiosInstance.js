import axios from "axios";
import { useAuthStore } from './../Stores/useAuthStore';

const axiosInstance = axios.create({
  baseURL: "https://bookstore.eraasoft.pro/api",
});

axiosInstance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
