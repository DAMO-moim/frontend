import { instance } from '../axiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 사용자 등록
export const registerUser = async (userData) => {
  const response = await instance.post('/members', userData);
  return response.data;
};

// 아이디 찾기
export const findUserId = async (userData) => {
  const response = await instance.post('/members/id', userData);
  return response.data;
};

// 로그인
export const loginUser = async (credentials) => {
  try {
    console.log("📤 Sending Login Request:", credentials);
    const response = await instance.post('/auth/login', credentials, {
      headers: { 'Content-Type': 'application/json' },
    });

    console.log("📥 Full Response:", response.data);

    const { accessToken, refreshToken, users } = response.data;

    if (!accessToken || !refreshToken || !users || users.length === 0) {
      throw new Error('로그인 응답에 유효한 데이터가 없습니다.');
    }

    // AsyncStorage에 저장
    await AsyncStorage.setItem('accessToken', accessToken);
    await AsyncStorage.setItem('refreshToken', refreshToken);
    await AsyncStorage.setItem('user', JSON.stringify(users));

    return { users, accessToken };
  } catch (error) {
    console.error('❌ Login failed:', error.response?.data || error.message);
    throw error;
  }
};
