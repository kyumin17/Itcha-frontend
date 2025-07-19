'use client';

import { useState } from 'react';

const FieldButton = (
  { label, fields, setSelectFields }: 
  { label: string, fields: string[], setSelectFields: (value: string[]) => void }
) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  
  const handleClick = () => {
    if (!isClick) { // activate
      if (!fields.includes(label)) setSelectFields([...fields, label]);
    } else {
      setSelectFields(fields.filter(field => field !== label));
    }

    setIsClick(!isClick);
  }

  return (
    <button 
      className={`rounded-3xl py-1 px-3 border-1 text-[14px] 
        ${isClick ? 'text-red-700 border-red-700 bg-red-50' : 'border-gray-300'}`
      }
      onClick={handleClick}
    >
      { label }
    </button>
  );
}

export default FieldButton;