import './App.css';
import Banner from '@/components/Banner';
import * as Post from '@/components/Post';
import useFetchPosts from '@/hooks/useFetchPosts';

function Home() {
  const { data: posts, isLoading } = useFetchPosts();

  console.log('test', posts, isLoading);

  return (
    <>
      <Banner />
      <Post.List>
        <Post.Card title="포스팅 검증" />
        <Post.Card title="포스팅 무료" />
      </Post.List>
    </>
  );
}

export default Home;
