import { PostProps } from '@/types/types';
import FieldBox from './FieldBox';
import TechBox from './TechBox';

const PostBlock = ({ postData }: { postData: PostProps }) => {
  return (
    <div className='border-b-1 border-gray-300 pt-4.5 pb-3 flex flex-col gap-3'>
      {/* post info */}
      <div className='flex gap-2'>
        <div className='bg-black text-white text-xs w-14 py-0.5 rounded-xs text-center font-bold'>
          {postData.type}
        </div>
        <div className='text-sm font-medium'>
          {postData.title}
        </div>
      </div>
      {/* recruit field */}
      <div className='flex gap-2'>
        {postData.recruit_field.map((field: string) => {
          return (
            <FieldBox key={field} fieldName={field} />
          );
        })}
      </div>
      {/* tech stack */}
      <div className='flex gap-2'>
        {postData.tech_stack.map((stack: string) => {
          return (
            <TechBox key={stack} tech={stack} />
          );
        })}
      </div>
    </div>
  );
}

export default PostBlock;