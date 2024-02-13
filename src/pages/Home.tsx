import './App.css';
import Banner from '@/components/Banner';
import * as Post from '@/components/Post';
// import * as Card from '@root/src/components/Post/Card';
import * as Filter from '@/components/Filter';
import { Post as PostType } from '@/models/post';
import { useFetchPosts } from '@/hooks/useFetchPosts';

function Home() {
  const { data: posts, isLoading } = useFetchPosts();

  const getCard = (post: PostType) => {
    return {
      type: post.type,
      channel: post.channel,
      title: post.title,
      candidatesCount: post.candidates.length,
      viewsCount: post.views,
      techTags: post.techTags,
      deadlineDate: post.deadlineDate,
      user: {
        name: post.leader.name,
        profileImage: post.leader.profileImage,
      },
    } as Post.CardProps;
  };

  return (
    <>
      <Banner />
      <Filter.Selector placeholder="유형" options={['project', 'study']} onChange={() => {}} />
      {posts && posts[0] && (
        <Post.List>
          <Post.Card {...getCard(posts[0])} />
          {/* <Post.Card title="포스팅 무료" /> */}
        </Post.List>
      )}
    </>
  );
}

export default Home;
