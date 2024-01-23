import { useQuery } from '@tanstack/react-query';
import posts from '@root/dummy_data.json';

export const useFetchPosts = () => {
  return useQuery({ queryKey: ['posts'], queryFn: () => posts });
};
