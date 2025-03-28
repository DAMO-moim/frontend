import { instance } from '../axiosInstance';

export const fetchCategories = async () => {
  try {
    const response = await instance.get(`/members/categories`);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching categories:', error.response?.data || error.message);
    return [];
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
