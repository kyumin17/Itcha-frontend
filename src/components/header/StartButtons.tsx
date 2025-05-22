import { useRouter } from 'next/navigation';

const StartButtons = () => {
  const router = useRouter();

  return (
    <div className='flex flex-row gap-5 items-center'>
      <button 
        className='text-red-700 text-sm'
        onClick={() => router.push('/login')}
      >
        로그인
      </button>
      <button 
        className='text-white bg-red-700 text-sm rounded-[100px] px-3.5 py-[5px]'
        onClick={() => router.push('/signup')}
      >
        회원가입
      </button>
    </div>
  );
};

export default StartButtons;