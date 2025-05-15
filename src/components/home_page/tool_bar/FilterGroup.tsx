'use client';
import { useState } from 'react';
import SelectFilter from '@/components/common/SelectFilter';

const FilterGroup = () => {
  const [status , setStatus] = useState<null | string>('모집중');
  const [recruitField, setRecruitField] = useState<null | string>(null);
  const [techStack, setTechStack] = useState<null | string>(null);

  return (
    <div className='flex items-center gap-3'>
      <div className='flex gap-1 h-6 items-center border-1 border-red-700 bg-white w-fit px-[8px]'>
        <span className='text-xs text-red-700'>
          필터
        </span>
        <img src='/image/icon/filter.svg' alt='filter' className='w-3 h-3' />
      </div>
      <SelectFilter
        label='모집 상태'
        menu={['모집중', '모집완료']}
        selectMenu={status}
        setSelectMenu={setStatus}
      />
      <SelectFilter
        label='모집 분야'
        menu={['프론트엔드', '백엔드', '디자인', '기획']}
        selectMenu={recruitField}
        setSelectMenu={setRecruitField}
      />
      <SelectFilter
        label='기술 스택'
        menu={['React', 'Vue', 'Node.js', 'Python']}
        selectMenu={techStack}
        setSelectMenu={setTechStack}
      />
    </div>
  );
}

export default FilterGroup;