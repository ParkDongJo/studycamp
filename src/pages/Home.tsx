import './App.css';
import Banner from '@/components/Banner';
import * as Post from '@/components/Post';
import { useFetchPosts } from '@/hooks/useFetchPosts';

function Home() {
  const result = useFetchPosts();

  console.log(result.test);

  return (
    <>
      <div>{result.data && result.data[0].id}</div>
      <Banner />
      <Post.List>
        {/* <Post.Card title="포스팅 검증" /> */}
        {/* <Post.Card title="포스팅 무료" /> */}
      </Post.List>
    </>
  );
}

export default Home;
