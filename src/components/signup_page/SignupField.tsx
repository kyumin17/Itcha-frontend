import SignupForm from '@/components/signup_page/SignupForm';
import FieldButton from '@/components/signup_page/FieldButton';
import fieldsData from '@/data/field';
import Button from '@/components/common/Button';
import Gap from '@/components/common/Gap';

const SignupField = (
  { fields, setFields, next, back }:
  {
    fields: string[],
    setFields: (value: string[]) => void,
    next: () => void,
    back: () => void,
  }
) => {
  return (
    <SignupForm
      title='어떤 분야에 관심이 있으신가요?'
      back={back}
    >
      <div className='flex flex-wrap gap-2.5'>
        {fieldsData.map((data: string) => (
          <FieldButton 
            key={data} 
            label={data} 
            fields={fields}
            setSelectFields={setFields}
          />
        ))}
      </div>

      <div className='absolute bottom-5 w-[calc(100%-3rem)]'>
        <Button
          label='다음'
          color='red'
          handleClick={next}
          isActivate={fields.length !== 0}
        />

        <Gap height={3} />

        <Button
          label='건너뛰기'
          color='gray'
          handleClick={next}
          isActivate={true}
        />
      </div>
    </SignupForm>
  );
}

export default SignupField;