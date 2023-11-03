import axios from "axios";

const baseURL = "http://127.0.0.1:3000/v1";

export const authFetch = axios.create({
  baseURL,
});

authFetch.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);
