'use client'

import Header from '@/components/header/Header';
import { useState } from 'react';
import http from '@/lib/api/http';
import { PostCreateProps, FieldProps } from '@/types/types';

const Writing = () => {
  const [title, setTitle] = useState<string>('');
  const [techStacks, setTechStacks] = useState<FieldProps[]>([]);
  const [content, setContent] = useState<string>('');

  const save = async () => {
    try {
      const form: PostCreateProps = {
        type: 'study',
        title: title,
        content: content,
        deadline: '2025-01-01',
        is_completed: false,
        fields: techStacks
      };

      const response = await http.post('/api/recruitments', form);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <div className='mx-[15%]'>
        <input 
          type='text' 
          className='bg-neutral-50 focus:outline-none mt-12 h-8 w-[100%] px-3.5 py-5 text-sm rounded-sm'
          placeholder='제목을 입력해주세요'
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <div className='border-b-2 mt-4 mb-8 border-b-neutral-300'>
        </div>
        <div className='text-md text-neutral-700 mb-3'>
          모집 인원
        </div>
        <div>

        </div>

        <div className='text-md text-neutral-700 mb-3'>
          기술 스택
        </div>
        <div>
          
        </div>

        <div className='text-md text-neutral-700 mb-3'>
          프로젝트 소개
        </div>
        <input 
          className='bg-neutral-50 focus:outline-none w-[100%]'
          type='text' 
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button 
          onClick={save}
          className='bg-black text-white text-sm px-3 py-1 rounded-xl'
        >
          저장하기
        </button>
      </div>
    </div>
  );
};

export default Writing;