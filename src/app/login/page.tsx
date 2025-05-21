'use client';

import { useState } from 'react';
import { signIn, SignInResponse } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [id, setId] = useState<string>('');
  const [idFocus, setIdFocus] = useState<boolean>(false);
  const [pw, setPw] = useState<string>('');
  const [pwFocus, setPwFocus] = useState<boolean>(false);
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

  const getBorderStyle = (isFocus: boolean) => {
    if (isFail) return 'border-red-500';
    if (isFocus) return 'border-black';
    else return 'border-neutral-300';
  }

  return (
    <div className='w-100 absolute left-[50%] translate-x-[-50%]'>
      <div className='text-red-700 text-2xl font-bold mt-25 mb-8 text-center'>
        Itcha
      </div>
      {/* input form */}
      <div className='flex flex-col gap-6 mb-3'>
        <div>
          <div 
            className={`px-2.5 py-0.5 border-1 rounded-sm flex items-center ${getBorderStyle(idFocus)}`}
            onFocus={() => {setIdFocus(true)}}
            onBlur={() => {setIdFocus(false)}}
          >
            <img src='/image/icon/user.svg' alt='' className='w-4.5 h-4.5' />
            <input
              className='w-[100%] text-sm py-[4px] px-[9px] focus:outline-none'
              type='text'
              placeholder='아이디'
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
          </div>
        </div>
          
        <div>
          <div 
            className={`px-2.5 py-0.5 border-1 rounded-sm flex items-center mb-1.5 ${getBorderStyle(pwFocus)}`}
            onFocus={() => {setPwFocus(true)}}
            onBlur={() => {setPwFocus(false)}}
          >
            <img src='/image/icon/lock.svg' alt='' className='w-4.5 h-4.5' />
            <input
              className='w-[100%] text-sm py-[4px] px-[9px] focus:outline-none'
              type='password'
              placeholder='비밀번호'
              onChange={(e) => {
                setPw(e.target.value);
              }}
            />
          </div>
          <div className='text-red-500 text-[13px] h-4'>
            {isFail ? '아이디 혹은 비밀번호가 일치하지 않습니다. 다시 시도해 주세요.' : ''}
          </div>
        </div>
      </div>
      {/* login button */}
      <button 
        className='bg-red-700 w-[100%] text-sm text-white rounded-md h-9 mb-4'
        onClick={login}
      >
        로그인
      </button>
      <button 
        className='bg-white w-[100%] text-sm text-red-700 rounded-md h-9 border border-red-700'
        onClick={() => {
          router.push('/signup');
        }}
      >
        회원가입
      </button>
      <div className='text-center text-[13px] text-neutral-500 mt-9'>
        아이디 혹은 비밀번호를 잊으셨나요? <span className='underline'>계정 찾기</span>
      </div>
    </div>
  );
};

export default Login;