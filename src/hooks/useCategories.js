import { useQuery } from '@tanstack/react-query';
import * as categoryService from '../api/queries/categoryService'; // 카테고리 API 서비스

export const useCategories = (memberId, token) => {
  // 카테고리 데이터를 useQuery로 관리
  const { data: categories, isLoading, error } = useQuery({
    queryKey: ['categories', memberId],
    queryFn: () => categoryService.fetchCategories(memberId, token),
    staleTime: Infinity, // 데이터가 오래 유지되도록 설정
  });

  return { categories, isLoading, error };
};
