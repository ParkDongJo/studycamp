import { useState } from 'react';
import './App.css';
import Banner from '@/components/Banner';
import * as Post from '@/components/Post';

function Home() {
  const [count, setCount] = useState(0);

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
