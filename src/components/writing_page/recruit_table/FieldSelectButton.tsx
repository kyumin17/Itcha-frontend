'use client';

import { useState } from 'react';
import { RecruitReq } from '@/types/common';

const FieldSelectButton = ({ recruitmentRequires, setRecruitmentRequires, idx }
  : {
    recruitmentRequires: RecruitReq[];
    setRecruitmentRequires: React.Dispatch<React.SetStateAction<RecruitReq[]>>;
    idx: number;
  }
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedField, setSelectedField] = useState<string | null>(null);
  const fieldList = [
    { id: 1, name: '프론트엔드' },
    { id: 2, name: '백엔드' },
    { id: 3, name: '풀스택' },
    { id: 4, name: '데브옵스' },
    { id: 5, name: 'PM' },
    { id: 6, name: 'QA' },
    { id: 8, name: 'UI/UX' },
    { id: 9, name: '모바일' },
    { id: 10, name: 'DB' },
    { id: 11, name: '보안' }
  ];

  const selectField = (idx: number) => {
    setSelectedField(fieldList[idx].name);
    const newRequires = [...recruitmentRequires];
    newRequires[idx].field = fieldList[idx].id;
    setRecruitmentRequires(newRequires);
  };

  return (
    <>
      <button 
        className='flex items-center gap-1 relative w-full'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='w-full'>
          {selectedField || '분야 선택'}
        </div>
        <img src='/image/icon/chevron-down.svg' alt='select' className='h-5 w-5 absolute right-[10%]' />
      </button>
      <div className={`absolute mt-6 bg-neutral-100 w-[50%] z-1 h-50 overflow-y-scroll ${isOpen ? '' : 'hidden'}`}>
        {fieldList.map((field) => {
          return (
            <button 
              key={field.id} 
              className='block w-full text-left px-4 py-2 hover:bg-neutral-200'
              onClick={() => selectField(idx)}
            >
              {field.name}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default FieldSelectButton;