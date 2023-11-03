import axios from "axios";

const baseURL = "http://127.0.0.1:3000/v1";

const token = localStorage.getItem("token");
export const authFetch = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    Authorization: token ? `Bearer ${token}` : "", // Include the token in the header if it exists
  },
});
