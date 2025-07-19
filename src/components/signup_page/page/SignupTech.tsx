import SignupForm from '@/components/signup_page/SignupForm';
import FieldButton from '@/components/signup_page/FieldButton';
import Button from '@/components/common/Button';
import Gap from '@/components/common/Gap';
import SearchBar from '@/components/signup_page/SearchBar';
import techData from '@/data/tech';

const SignupTech = (
  { tech, setTech, next, back }: 
  { 
    tech: string[],
    setTech: (value: string[]) => void,
    next: () => void,
    back: () => void,
  }
) => {
  return (
    <SignupForm
      title='어떤 기술 스택에 관심이 있으신가요?'
      back={back}
    >
      <SearchBar />

      <Gap height={8} />

      <div className='flex flex-wrap gap-2.5'>
        {Object.entries(techData).map(([key, value]) => (
          <div key={key} className='mb-4'>
            <div className='mb-3 font-bold text-[15px]'>
              { key }
            </div>
            
            <div className='flex flex-wrap gap-2.5'>
              {value.map((data) => (
                <FieldButton
                  key={data}
                  label={data}
                  fields={tech}
                  setSelectFields={setTech}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className='absolute bottom-5 w-[calc(100%-3rem)]'>
        <Button
          label='회원가입 완료'
          color='red'
          handleClick={next}
          isActivate={tech.length !== 0}
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

export default SignupTech;