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
