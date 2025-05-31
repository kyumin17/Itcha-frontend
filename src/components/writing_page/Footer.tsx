'use client';

import http from '@/lib/api/http';
import { PostForm } from '@/types/form';

const Footer = ({ title, content, date }: { title: string, content: string, date: string }) => {
  const save = async () => {
    try {
      const form: PostForm = {
        type: 'study',
        title: title,
        content: content,
        deadline: date,
        is_completed: false,
        fields: []
      };
      
      const response = await http.post('/api/recruitments', form);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='fixed bottom-0 left-0 w-full h-15 bg-neutral-100 flex items-center z-2'>
      <button 
        className='absolute right-10 bg-black text-white text-[13px] px-5 py-1.5 rounded-3xl'
        onClick={save}
      >
        등록하기
      </button>
    </div>
  );
}

export default Footer;