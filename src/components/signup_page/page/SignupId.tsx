import SignupForm from '@/components/signup_page/SignupForm';
import InputBox from '@/components/common/InputBox';
import Button from '@/components/common/Button';
import Gap from '@/components/common/Gap';

const SignupId = (
  { id, setId, next, back }:
  {
    id: string,
    setId: (value: string) => void,
    next: () => void,
    back: () => void,
  }
) => {
  return (
    <SignupForm 
      title='아이디를 입력해주세요'
      back={back}
    >
      <div>
        <InputBox 
          setValue={setId}
          placeholder='아이디'
        />

        <Gap height={10} />

        <Button
          label='다음'
          handleClick={next}
          isActivate={id.length !== 0}
          color='red'
        />
      </div>
    </SignupForm>
  );
}

export default SignupId;