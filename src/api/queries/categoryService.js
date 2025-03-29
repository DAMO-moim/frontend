import { instance } from '../axiosInstance';

// 카테고리 데이터 가져오기 (GET 요청)
export const fetchCategories = async () => {
  try {
    const response = await instance.get(`/members/categories`);
    console.log(response.data.data);
    return Array.isArray(response.data.data) ? response.data.data : []; // Ensure valid array
  } catch (error) {
    console.error('Error fetching categories:', error.response?.data || error.message);
    return []; // Return empty array on error
  }
};


// 카테고리 수정하기 (PATCH 요청)
export const updateUserCategories = async (data) => {
  try {
    const response = await instance.patch('/members/categories', data);
    console.log('카테고리 수정 성공:', response.data);
    return response.data; // 성공 시 응답 데이터 반환
  } catch (error) {
    console.error('Error updating categories:', error.response?.data || error.message);
    throw error; // 오류 발생 시 예외 던짐
  }
};


// export const fetchSchedules = async () => {
//   try {
//     const response = await instance.post(`/groups/${groupsId}/schedules`, {
//       page: 1,
//       size: 10,
//     }, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     setSchedules(response.data.data);
//   } catch (error) {
//     console.error('Error fetching schedules:', error.response?.data || error.message);
//   }
// };
