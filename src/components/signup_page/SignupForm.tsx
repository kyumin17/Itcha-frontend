const SignupForm = (
  { children, title, back }: 
  { 
    children: React.ReactNode, 
    title: string, 
    back: () => void
  }
) => {
  return (
    <div className='px-6 pt-7'>
      <img
        src='/image/icon/arrow-left.svg'
        className='w-6 h-6 mb-7'
        onClick={back}
      />
      <div 
        className='text-[18px] font-medium mb-6'
      >
        { title }
      </div>
      { children }
    </div>
  );
}

export default SignupForm;