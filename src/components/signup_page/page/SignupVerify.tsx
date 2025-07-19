'use client';

import SignupForm from '@/components/signup_page/SignupForm';
import InputBox from '@/components/common/InputBox';
import { useState, useEffect } from 'react';
import Gap from '@/components/common/Gap';

interface Time {
  minute: number;
  second: number;
}

const SignupVerify = (
  { email, setEmail, next, back }:
  { 
    email: string,
    setEmail: (value: string) => void,
    next: () => void,
    back: () => void,
  }
) => {
  const [isSend, setIsSend] = useState<boolean>(false);
  const [verifyCode, setVerifyCode] = useState<string>('');

  const [time, setTime] = useState<Time>({ minute: 5, second: 0 });

 useEffect(() => {
    if (!isSend) return;

    const timerId = setInterval(() => {
      setTime(prev => {
        if (prev.minute === 0 && prev.second === 0) clearInterval(timerId);

        if (prev.second > 0) return { ...prev, second: prev.second - 1 };
        else return { minute: prev.minute - 1, second: 59 };
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [isSend]);

  useEffect(() => {
    if (verifyCode.length === 6) next(); // 추후 확인 로직 추가
  }, [verifyCode]);

  return (
    <SignupForm 
      title='이메일 인증을 진행해 주세요'
      back={back}
    >
      <div className='flex'>
        <InputBox 
          setValue={setEmail}
          placeholder='이메일'
        >
          <div className='text-[13px] pr-3 text-gray-500'>
            @sogang.ac.kr
          </div>
        </InputBox>
        <button
          className={`text-white rounded-[3px] text-[12px] bg-black ml-1.5 px-3 
            ${email.length !== 0 ? '' : 'opacity-20'}
          `}
          onClick={() => setIsSend(true)}
        >
          인증하기
        </button>
      </div>

      <Gap height={4} />

      {isSend && <InputBox
        setValue={setVerifyCode}
        placeholder='인증번호'
        maxLength={6}
      >
        <span className='text-[13px] pr-3 text-red-700'>
          {String(time.minute).padStart(2, '0')}:{String(time.second).padStart(2, '0')}
        </span>
      </InputBox>}
    </SignupForm>
  );
}

export default SignupVerify;