'use client';

import signup from '@/lib/api/signup';
import { useRef, useState } from 'react';
import http from '@/lib/api/http';
import { CheckMailProps, CheckIdProps, SignupResultProps } from '@/types/types';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const router = useRouter();

  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const name = 'example';

  const [idFocus, setIdFocus] = useState<boolean>(false);
  const [mailFocus, setMailFocus] = useState<boolean>(false);
  const [pwFocus, setPwFocus] = useState<boolean>(false);

  const [idError, setIdError] = useState<string>('3~15글자의 영문 및 숫자를 입력해주세요');
  const [mailError, setMailError] = useState<string>('');
  const [pwError, setPwError] = useState<string>('8~20 글자의 숫자와 영문 및 특수 기호(@, *, #, %)를 입력해주세요');

  const checkIdCorrect = async (newId: string) => {
    setIdError('');

    if (!newId) {
      setIdError('3~15글자의 영문 및 숫자를 입력해주세요');
      return;
    }

    if (newId.length < 3 || newId.length > 15) {
      setIdError('아이디는 3글자에서 15글자 사이어야 합니다');
      return;
    }
    
    if (!/^[0-9|a-z|A-Z]+$/.test(newId)) {
      setIdError('아이디는 영문과 숫자로만 구성되어야 합니다');
      return;
    }

    try {
      const response: CheckIdProps = await http.get(`/api/auth/check-username?username=${newId}`);
      if (response.is_taken) {
        setIdError(`${id}은 이미 존재하는 아이디입니다`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const checkMailCorrect = async (newMail: string) => {
    setMailError('');

    try {
      const response: CheckMailProps = await http.get(`/api/auth/check-username?username=${newMail}`);
      if (response.available) {
        setMailError('이미 해당 이메일로 가입한 계정이 있습니다\n계정을 잊으셨다면 아이디 및 비밀번호 찾기 기능을 이용해주세요');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const checkPwCorrect = async (newPw: string) => {
    setPwError('');

    if (!newPw) {
      setPwError('3~15글자의 영문 및 숫자를 입력해주세요');
      return;
    }

    if (newPw.length < 8 || newPw.length > 20) {
      setPwError('비밀번호는 8글자에서 20글자 사이어야 합니다');
      return;
    }
    
    if (!/^[0-9|a-z|A-Z|~!@#\#$%<>^&*]+$/.test(newPw)) {
      setPwError('비밀번호는 숫자와 영문 및 특수기호(~!@#\#$%<>^&*)로만 구성되어야 합니다');
      return;
    }
  }

  return (
    <div className='w-100 absolute left-[50%] translate-x-[-50%]'>
      {/* title */}
      <div className='text-red-700 text-2xl font-bold mt-25 mb-1'>
        Itcha
      </div>
      <div className='text-[13px] text-red-700 mb-6'>
        만나서 반갑습니다 :)<br />
        잇차를 통해 다양한 프로젝트와 스터디를 만나보세요
      </div>
      {/* input form */}
      <div className='flex flex-col gap-6 mb-8'>
        <div>
          <div 
            className={`px-2.5 py-0.5 border-1 rounded-sm flex items-center border${idFocus ? '-black' : '-neutral-300'}`}
            onFocus={() => {setIdFocus(true)}}
            onBlur={() => {setIdFocus(false)}}
          >
            <img src='/image/icon/user.svg' alt='' className='w-4.5 h-4.5' />
            <input
              className='w-[100%] text-sm py-[4px] px-[9px] focus:outline-none'
              type='text'
              placeholder='아이디'
              onChange={(e) => {
                checkIdCorrect(e.target.value);
                setId(e.target.value);
              }}
            />
          </div>
          <div className={`text-[13px] mt-1 ${id ? 'text-red-500' : 'text-neutral-500'}`}>
            {idError}
          </div>
        </div>
        
        <div>
          <div className='flex gap-2 mb-2'>
            <div 
              className={`px-2.5 py-0.5 border-1 rounded-sm flex items-center border${mailFocus ? '-black' : '-neutral-300'}`}
              onFocus={() => {setMailFocus(true)}}
              onBlur={() => {setMailFocus(false)}}
            >
              <img src='/image/icon/mail.svg' alt='' className='w-4.5 h-4.5' />
              <input
                className=' w-[100%] text-sm py-[4px] px-[9px] focus:outline-none'
                type='text'
                placeholder='이메일'
                onChange={(e) => {
                  checkMailCorrect(e.target.value);
                  setMail(e.target.value);
                }}
              />
              <div className='text-sm text-neutral-600'>
                @sogang.ac.kr
              </div>
            </div>
            <button className={`text-[13px] text-white w-25 rounded-sm bg-${mail ? 'black' : 'neutral-300'}`}>
              인증하기
            </button>
          </div>
          <div className={`text-[13px] mt-1 ${mail ? 'text-red-500' : 'text-neutral-500'}`}>
            {mailError}
          </div>
        </div>

        <div>
          <div 
            className={`px-2.5 py-0.5 border-1 rounded-sm flex items-center border${pwFocus ? '-black' : '-neutral-300'}`}
            onFocus={() => {setPwFocus(true)}}
            onBlur={() => {setPwFocus(false)}}
          >
            <img src='/image/icon/lock.svg' alt='' className='w-4.5 h-4.5' />
            <input
              className='w-[100%] text-sm py-[4px] px-[9px] focus:outline-none'
              type='password'
              placeholder='비밀번호'
              onChange={async (e) => {
                await checkPwCorrect(e.target.value);
                setPw(e.target.value);
              }}
            />
          </div>
          <div className={`text-[13px] mt-1 ${pw ? 'text-red-500' : 'text-neutral-500'}`}>
            {pwError}
          </div>
        </div>
      </div>
      {/* submit button */}
      <button 
        className='bg-red-700 w-[100%] text-sm text-white rounded-md h-9'
        onClick={async () => {
          const response: SignupResultProps = await signup(id, pw, name, mail);
          if (response.state === 'success') {
            router.push('/');
          } else {
            confirm(response.error);
          }
        }}
      >
        가입하기
      </button>
    </div>
  );
};

export default Signup;