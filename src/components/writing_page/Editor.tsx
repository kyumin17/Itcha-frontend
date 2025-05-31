'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import 'react-quill-new/dist/quill.snow.css';
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

const Editor = ({ content, setContent }: { content: string, setContent: React.Dispatch<React.SetStateAction<string>> }) => {
  const modules = {
    toolbar: {
      container: [
        ['image'],
        [{ header: [1, 2, 3, 4, 5, false] }],
        ['bold', 'underline'],
      ],
    },
  };
  return (
    <div>
      <ReactQuill 
        modules={modules} 
        value={content}
        onChange={setContent}
        theme='snow'
      />
    </div>
 );
};

export default Editor;