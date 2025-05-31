'use client';

import PageWrapper from '@/components/common/PageWrapper';
import Header from '@/components/header/Header';
import ToolBar from '@/components/home/tool_bar/ToolBar';
import PostBlock from '@/components/common/PostBlock';
import useFetch from '@/lib/hooks/useFetch';

const Home = () => {
  const { data: posts, error } = useFetch('/api/recruitments');

  return (
    <PageWrapper>
      <Header />
      <ToolBar />
      <div className='mx-15'>
        {posts && posts.results.map((post: any) => {
          return (
            <PostBlock key={post.id} postData={post} />
          );
        })}
      </div>
    </PageWrapper>
  );
}

export default Home;
