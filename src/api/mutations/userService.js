// mutations: src/api/mutations 
// 데이터를 생성, 수정, 삭제하는 함수들을 관리

import { instance } from '../axiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 사용자 등록
export const registerUser = async (userData) => {
  const response = await instance.post(`/users`, userData);
  return response.data;
};

// 로그인
export const loginUser = async (credentials) => {
  const response = await instance.post("/auth/login", credentials, {
    headers: { "Content-Type": "application/json" },
  });

  const accessToken = response.headers["authorization"];
  if (accessToken) {
    const tokenWithBearer = accessToken.startsWith("Bearer ")
      ? accessToken
      : `Bearer ${accessToken}`;
    await AsyncStorage.setItem("accessToken", tokenWithBearer);
  }

  const usersResponse = await instance.get("/users/", {
    headers: {
      Authorization: `Bearer ${await AsyncStorage.getItem("accessToken")}`,
    },
  });

  const users = usersResponse.data.data;
  const loggedInUser = users.find((user) => user.email === credentials.email);

  if (loggedInUser) {
    await AsyncStorage.setItem("userId", loggedInUser.userId.toString());
    await AsyncStorage.setItem("userEmail", loggedInUser.email);
    return { user: loggedInUser, accessToken };
  } else {
    throw new Error("사용자 정보를 찾을 수 없습니다.");
  }
};
