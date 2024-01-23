import { useQuery } from '@tanstack/react-query';
import { Post } from '@/models/post';
import posts from '@root/dummy_data.json';

const middleware = (datas: { [key: string]: any }[]) => {
  return datas.map(
    (post: any) =>
      ({
        id: post.id,
        grade: post.grade,
        title: post.title.toUpperCase(),
        type: post.type,
        channel: post.channel,
        connect: post.connect,
        field: post.field,
        techTags: post.techTags,
        leader: post.leader,
        views: post.views,
        candidates: post.candidates,
        members: post.members,
        description: post.description,
        isPublic: post.isPublic,
        isDeleted: post.isDeleted,
        deadlineDate: post.deadlineDate,
        startDate: post.startDate,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
      } as Post)
  );
};

export const useFetchPosts = () => {
  return useQuery({ queryKey: ['posts'], queryFn: () => posts, select: datas => middleware(datas) });
};
