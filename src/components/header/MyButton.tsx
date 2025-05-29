import { signOut } from 'next-auth/react';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const MyButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        <img src='/image/icon/user.png' alt='user' className='w-7 h-7' />
      </button>

      <div className={`absolute w-70 right-0 top-10 bg-white shadow-md z-2 rounded-md px-3 py-2 ${isOpen ? '' : 'hidden'}`}>
        <div>
          <div>
            
          </div>
          <div>
            <div>
              hiii
            </div>
            <div>
              hiii@sogang.ac.kr
            </div>
          </div>
        </div>
        <div>
          마이페이지
        </div>
        <div>
          알림
        </div>
        <div>
          쪽지
        </div>
        <div onClick={() => {
          signOut();
          router.push('/login');
        }}>
          로그아웃
        </div>
      </div>
    </>
  );
};

export default MyButton;