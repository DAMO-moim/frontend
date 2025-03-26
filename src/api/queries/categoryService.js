import { instance } from '../axiosInstance';

export const fetchCategories = async (memberId, token) => {
  try {
    const response = await instance.get(`/members/categories`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.data; // 카테고리 데이터 반환
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};
