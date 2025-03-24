// queries: src/api/queries
// 데이터를 가져오는 함수들을 관리
import { instance } from '../axiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 로그인한 현재 사용자 정보 가져오기
export const getCurrentUser = async () => {
  const userId = await AsyncStorage.getItem("userId");
  const token = await AsyncStorage.getItem("accessToken");

  if (!token || !userId) return null;

  try {
    const response = await instance.get(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to get current user:", error);

    // 401(Unauthorized)일 때만 AsyncStorage 초기화
    if (error.response?.status === 401) {
      await AsyncStorage.multiRemove(["userId", "userEmail", "accessToken"]);
    }
    return null;
  }
};
