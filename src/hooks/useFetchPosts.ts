import { useQuery } from '@tanstack/react-query';
import posts from '@root/dummy_data.json';

const useFetchPosts = () => {
  return useQuery({ queryKey: ['posts'], queryFn: () => posts });
};
export default useFetchPosts;
