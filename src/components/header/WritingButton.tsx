import { useRouter } from 'next/navigation';

const WritingButton = () => {
  const router = useRouter();

  return (
    <button 
      className='bg-black text-white text-sm px-4 py-0.5 rounded-3xl'
      onClick={() => router.push('/write')}
    >
      글쓰기
    </button>
  );
};

export default WritingButton;