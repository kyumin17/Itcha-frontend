'use client';

import { useState } from 'react';
import { signIn, SignInResponse } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import InputBox from '@/components/common/InputBox';
import Gap from '@/components/common/Gap';
import Button from '@/components/common/Button';

const Login = () => {
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const [isFail, setIsFail] = useState<boolean>(false);

  const router = useRouter();

  const login = async () => {
    const response: SignInResponse | undefined = await signIn('credentials', {
      username: id,
      password: pw,
      redirect: false,
      callbackUrl: '/',
    });

    if (response && response.ok) {
      router.push('/');
    } else {
      setIsFail(response ? !response.ok : false);
    }
  }

  return (
    <div className='px-5 top-[50%] translate-y-[50%] max-w-110 m-auto'>
      <div className='text-red-700 text-3xl font-bold text-center'>
        Itcha
      </div>

      <Gap height={11} />

      {/* input form */}
      <InputBox 
        setValue={setId} 
        placeholder='아이디'
        isFail={isFail} 
      />

      <Gap height={4} />
        
      <InputBox 
        setValue={setPw} 
        placeholder='비밀번호' 
        isFail={isFail}
        type='password'
      />
      {isFail && <div className='text-red-500 text-[13.5px] h-4 mt-3'>
        아이디 혹은 비밀번호가 일치하지 않습니다.
      </div>}
      
      <Gap height={5} />

      <div className='flex relative'>
        <button 
          className='text-[15px] text-gray-400 items-center'
        >
          <input 
            type='checkbox' 
            className='mr-1.5 h-3.5 w-3.5'
          />
          <span>로그인 상태 유지</span>
        </button>
        <button 
          className='text-[15px] text-gray-400 absolute right-0'
          onClick={() => router.push('/find_pw')}
        >
          비밀번호 찾기
        </button>
      </div>

      <Gap height={7} />

      {/* login button */}
      <Button
        label='로그인'
        handleClick={login}
        isActivate={id.length !== 0 && pw.length !== 0}
        color='red'
      />

      <Gap height={3} />

      <button 
        className='w-[100%] text-red-700 h-8 font-medium text-[14px]'
        onClick={() => {
          router.push('/signup/id');
        }}
      >
        회원가입
      </button>
    </div>
  );
};

export default Login;