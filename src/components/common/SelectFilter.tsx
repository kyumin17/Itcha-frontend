'use client';
import { useState } from 'react';

const SelectFilter = ({ label, menu, selectMenu, setSelectMenu }
: { label: string, 
    menu: string[], 
    selectMenu: string | null, 
    setSelectMenu: React.Dispatch<React.SetStateAction<string | null>>
  }) => {
  
  const updateMenu: string[] = ['선택 안함', ...menu];

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='relative' onClick={() => setIsOpen(!isOpen)}>
      <button 
        className={`text-xs h-6 flex items-center px-[8px] gap-1 
          ${selectMenu ? 'bg-red-100 text-red-700' : 'bg-white'}`
        }
      >
        <span>
          {selectMenu ? selectMenu : label}
        </span>
        <img src='/image/icon/chevron-down.svg' alt='down' className='w-4 h-4' />
      </button>
      <div className={`bg-white border-t-1 border-x-1 absolute mt-2 w-[100%] ${isOpen ? 'block' : 'hidden'}`}>
        {updateMenu.map((item: string) => {
          return (
            <div 
              key={item} 
              className='text-xs border-b-1' 
              onClick={() => {
                setSelectMenu(item != '선택 안함' ? item : null);
                setIsOpen(false);
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  )
};

export default SelectFilter;
