import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
  headers: {
    "Content-Type": "application/json",
  },
  // timeout: 3000,
});

// export const instance = axios.create({
//   baseURL: `http://localhost:8080/api/`,
//   // withCredentials: true,
// });

// instance.interceptors.response.use((response) => {
//   // Thrown error for request with OK status code

//   return response;
// });
