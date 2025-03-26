// mutations: src/api/mutations 
// 데이터를 생성, 수정, 삭제하는 함수들을 관리

import { instance } from '../axiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 사용자 등록
export const registerUser = async (userData) => {
  const response = await instance.post(`/members`, userData);
  return response.data;
};

//아이디 찾기
export const findUserId = async (userData) => {
  const response = await instance.post(`/members/id`, userData);
  return response.data;
};


export const loginUser = async (credentials) => {
  try {
    const response = await instance.post("/auth/login", credentials, {
      headers: { "Content-Type": "application/json" },
    });

    // 서버 응답에서 필요한 데이터 가져오기
    const accessToken = response.data?.accessToken; // Optional chaining으로 안전하게 접근
    const refreshToken = response.data?.refreshToken;
    const loggedInUser = response.data?.users;

    console.log("response.data",response.data);
    console.log("accessToken",accessToken);
    console.log("refreshToken",refreshToken);
    console.log("loggedInUser",loggedInUser);

    if (!accessToken || !refreshToken || !loggedInUser) {
      throw new Error("로그인 응답에 필요한 데이터가 없습니다.");
    }

    // AsyncStorage에 저장
    await AsyncStorage.setItem("accessToken", `Bearer ${accessToken}`);
    await AsyncStorage.setItem("refreshToken", refreshToken);
    await AsyncStorage.setItem("user", JSON.stringify(loggedInUser));

    return { users: loggedInUser, accessToken };
  } catch (error) {
    console.error("Login failed:", error);
    throw error; // 오류를 다시 던져서 상위 컴포넌트에서 처리하도록 함
  }
};



// export const loginUser = async (credentials) => {
//   const response = await instance.post("/auth/login", credentials, {
//     headers: { "Content-Type": "application/json" },
//   });

//   const accessToken = response.headers["authorization"];
//   if (accessToken) {
//     const tokenWithBearer = accessToken.startsWith("Bearer ")
//       ? accessToken
//       : `Bearer ${accessToken}`;
//     await AsyncStorage.setItem("accessToken", tokenWithBearer);
//   }

//   const usersResponse = await instance.get("/users/", {
//     headers: {
//       Authorization: `Bearer ${await AsyncStorage.getItem("accessToken")}`,
//     },
//   });

//   const users = usersResponse.data.data;
//   const loggedInUser = users.find((user) => user.email === credentials.email);

//   if (loggedInUser) {
//     await AsyncStorage.setItem("userId", loggedInUser.userId.toString());
//     await AsyncStorage.setItem("userEmail", loggedInUser.email);
//     return { user: loggedInUser, accessToken };
//   } else {
//     throw new Error("사용자 정보를 찾을 수 없습니다.");
//   }
// };
