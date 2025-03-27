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

    // 헤더에서 토큰 추출
    const accessToken = response.headers?.authorization?.split(" ")[1] || null;
    const refreshToken = response.headers?.refresh || null;

    if (!accessToken || !refreshToken) {
      throw new Error('로그인 응답에 유효한 토큰이 없습니다.');
    }

    // 토큰을 먼저 AsyncStorage에 저장 (API 요청에 필요)
    await AsyncStorage.setItem('accessToken', accessToken);
    await AsyncStorage.setItem('refreshToken', refreshToken);

    // 사용자 정보 조회 (필수 쿼리 파라미터 추가)
    // const usersResponse = await instance.get("/members", {
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    //   params: {
    //     page: 1,  // 기본값 설정
    //     size: 10, // 기본값 설정
    //   },
    // });

    // console.log("📥 Users Response Data:", usersResponse.data);
    // const users = usersResponse.data?.content || []; // content 배열을 가져옴

    // if (!users.length) {
    //   throw new Error('사용자 정보를 가져오는 데 실패했습니다.');
    // }

    // console.log("👤 Retrieved Users:", users);

    // 사용자 정보 저장
    // await AsyncStorage.setItem('user', JSON.stringify(users));

    return { accessToken, refreshToken };
  } catch (error) {
    // console.error('❌ Login failed:', error.response?.data || error.message);
    throw error;
  }
};

