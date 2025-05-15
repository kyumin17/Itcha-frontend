import Header from '@/components/common/Header';
import ToolBar from '@/components/home/tool_bar/ToolBar';
import PostBlock from '@/components/common/PostBlock';
import { PostProps } from '@/types/types';

const Home = () => {
  const posts: PostProps[] = [
    {
      id: '1',
      type: '스터디',
      title: '모집 제목',
      recruit_field: ['프론트엔드', '백엔드'],
      tech_stack: ['c', 'c++'],
      status: '모집중',
      deadline: '2025-05-07',
    },
    {
      id: '2',
      type: '프로젝트',
      title: '모집 제목2',
      recruit_field: ['AI'],
      tech_stack: ['javascript', 'typescript'],
      status: '모집완료',
      deadline: '2025-04-30',
    }
  ]; //test code

  return (
    <div>
      <Header children={<></>} />
      <ToolBar />
      <div className='mx-15'>
        {posts.map((post: PostProps) => {
          return (
            <PostBlock key={post.id} postData={post} />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
