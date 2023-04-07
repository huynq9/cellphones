import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer token",
  },
  timeout: 3000,
});
