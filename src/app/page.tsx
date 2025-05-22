'use client';

import Header from '@/components/header/Header';
import ToolBar from '@/components/home/tool_bar/ToolBar';
import PostBlock from '@/components/common/PostBlock';
import useFetch from '@/lib/hooks/useFetch';

const Home = () => {
  const { data: posts, error } = useFetch('/api/applications');

  return (
    <div>
      <Header />
      <ToolBar />
      <div className='mx-15'>
        {posts && posts.results.map((post: any) => {
          return (
            <PostBlock key={post.id} postData={post} />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
