'use client';

import { useState } from 'react';

const TechButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onBlur={() => setIsOpen(false)}>
      <button 
        className='flex items-center gap-1 bg-neutral-100 px-3 py-1 rounded-sm hover:bg-neutral-200 cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='text-[13px] font-normal text-neutral-700'>기술 스택</span>
        <img src='/image/icon/chevron-down.svg' alt='선택' className='h-5 w-5' />
      </button>
      <div 
        className={`${isOpen ? 'block' : 'hidden'} absolute bg-white border border-neutral-300 rounded-md mt-2 p-2 w-48 z-1`}
      >
        
      </div>
    </div>
  );
};

export default TechButton;