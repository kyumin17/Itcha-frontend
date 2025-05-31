'use client'

import PageWrapper from '@/components/common/PageWrapper';
import Header from '@/components/header/Header';
import Footer from '@/components/writing_page/Footer';
import { useState } from 'react';
import http from '@/lib/api/http';
import { PostForm } from '@/types/form';
import { Field, RecruitReq } from '@/types/common';
import RecruitTable from '@/components/writing_page/recruit_table/RecruitTable';
import Editor from '@/components/writing_page/Editor';
import TechButton from '@/components/writing_page/TechButton';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Writing = () => {
  const [title, setTitle] = useState<string>('');
  const [techStacks, setTechStacks] = useState<Field[]>([]);
  const [content, setContent] = useState<string>('');
  const [recruitmentRequires, setRecruitmentRequires] = useState<RecruitReq[]>([{field: null, count: 1}]);
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <PageWrapper>
      <Header />
      <div className='mx-[15%] mb-16'>
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
        
        {/* recruitment requires */}
        <div className='mb-10'>
          <div className='text-sm font-bold text-neutral-700 mb-3'>
            모집 인원
          </div>
          <div className='m-auto'>
            <RecruitTable 
              recruitmentRequires={recruitmentRequires} 
              setRecruitmentRequires={setRecruitmentRequires}
            />
          </div>
        </div>

        {/* end date */}
        <div className='mb-10'>
          <div className='text-sm font-bold text-neutral-700 mb-3'>
            마감일
          </div>
          <DatePicker 
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat='yyyy-MM-dd'
          />
        </div>
        
        {/* tech stack */}
        {/* <div className='mb-10'>
          <div className='text-sm font-bold text-neutral-700 mb-3'>
            기술 스택
          </div>
          <TechButton />
        </div> */}
        
        {/* content */}
        <div>
          <div className='text-sm font-bold text-neutral-700 mb-3'>
            프로젝트 소개
          </div>
          <Editor
            content={content}
            setContent={setContent}
          />
        </div>
      </div>
      <Footer 
        title={title}
        content={content}
        date={date + ''}
      />
    </PageWrapper>
  );
};

export default Writing;