import axios from 'axios';

export const instance = axios.create({
//   baseURL: "http://localhost:8082/api",
  baseURL: "http://172.30.1.52:8082/api",
  withCredentials: true,
});
