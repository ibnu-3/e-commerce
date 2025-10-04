import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fluffy-carnival-v67567vw7xg53x966-8080.app.github.dev",
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