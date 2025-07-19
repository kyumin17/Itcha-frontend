'use client';

import signup from '@/lib/api/signup';
import { useEffect, useState } from 'react';
import { SignupDTO } from '@/types/dto';
import { useRouter } from 'next/navigation';
import SignupId from '@/components/signup_page/page/SignupId';
import SignupPw from '@/components/signup_page/page/SignupPw';
import SignupTech from '@/components/signup_page/page/SignupTech';
import SignupVerify from '@/components/signup_page/page/SignupVerify';
import SignupField from '@/components/signup_page/SignupField';

interface Form {
  id: string;
  pw: string;
  email: string;
  fields: string[];
  tech: string[];
}

const Signup = () => {
  const [step, setStep] = useState<number>(1);
  const [form, setForm] = useState<Form>({ id: '', pw: '', email: '', fields: [], tech: [] });

  const router = useRouter();

  const next = () => setStep(s => s + 1);
  const back = () => setStep(s => s - 1);

  const updateForm = <K extends keyof Form>(field: K, value: Form[K]) => {
    setForm(prev => ({ 
      ...prev, 
      [field]: value 
    }));
  }

  const handleSignup = async () => {
    const response: SignupDTO = await signup(form.id, form.pw, 'ex', form.email);
    if (response.state === 'success') {
      router.push('/');
    } else {
      confirm(response.error);
      setStep(5);
    }
  }

  useEffect(() => {
    if (step === 6) handleSignup();
  }, [step]);

  return (
    <>
      {step === 1 && 
        <SignupId 
          id={form.id}
          setId={(value: string) => updateForm('id', value)}
          next={next}
          back={back}
        />
      }
      {step === 2 && 
        <SignupPw 
          pw={form.pw}
          setPw={(value: string) => updateForm('pw', value)}
          next={next}
          back={back}
        />
      }
      {step === 3 && 
        <SignupVerify 
          email={form.email}
          setEmail={(value: string) => updateForm('email', value)}
          next={next}
          back={back}
        />
      }
      {step === 4 && 
        <SignupField 
          fields={form.fields}
          setFields={(value: string[]) => updateForm('fields', value)}
          next={next}
          back={back}
        />
      }
      {step === 5 && 
        <SignupTech 
          tech={form.tech}
          setTech={(value: string[]) => updateForm('tech', value)}
          next={next}
          back={back}
        />
      }
    </>
  );
};

export default Signup;