import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const instance = axios.create({
//   baseURL: "http://localhost:8082/api",
  // baseURL: "http://172.30.1.17:8082/api",
  baseURL: "http://192.168.0.16:3002",
  withCredentials: true,
});

instance.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// instance.interceptors.response.use(
//   (response) => response, 
//   async (error) => {
//     const originalRequest = error.config;
    
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const refreshToken = await AsyncStorage.getItem("refreshToken");
//         if (!refreshToken) {
//           throw new Error("No refresh token available");
//         }

//         const refreshResponse = await axios.post("https://your-api.com/auth/refresh", { refreshToken });
//         const newAccessToken = refreshResponse.data.accessToken;

//         await AsyncStorage.setItem("accessToken", `Bearer ${newAccessToken}`);
//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

//         return instance(originalRequest);
//       } catch (refreshError) {
//         await AsyncStorage.multiRemove(["accessToken", "refreshToken", "userId", "userEmail"]);
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );
