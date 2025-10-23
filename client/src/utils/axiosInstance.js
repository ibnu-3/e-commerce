import axios from "axios";
const API_BASE_URL= "https://e-commerce-server-0pke.onrender.com" || "https://fluffy-carnival-v67567vw7xg53x966-8080.app.github.dev";
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosInstance;