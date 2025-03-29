import { useQuery } from '@tanstack/react-query';
import * as categoryService from '../api/queries/categoryService';

export const useCategories = (memberId, token) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['categories', memberId],
    queryFn: () => categoryService.fetchCategories(memberId, token),
    staleTime: 0,
    refetchOnWindowFocus: true,
  });

  return {
    categories: data || [], // Ensure categories is always an array
    isLoading,
    error,
  };
};
