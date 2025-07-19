import SignupForm from '@/components/signup_page/SignupForm';
import InputBox from '@/components/common/InputBox';
import Button from '@/components/common/Button';
import Gap from '@/components/common/Gap';

const SignupPw = (
  { pw, setPw, next, back }:
  { 
    pw: string,
    setPw: (value: string) => void,
    next: () => void,
    back: () => void,
  }
) => {
  return (
    <SignupForm 
      title='비밀번호를 입력해주세요'
      back={back}
    >
      <div>
        <InputBox 
          setValue={setPw}
          placeholder='비밀번호'
          type='password'
        />

        <Gap height={10} />

        <Button
          label='다음'
          handleClick={next}
          isActivate={pw.length !== 0}
          color='red'
        />
      </div>
    </SignupForm>
  );
}

export default SignupPw;