const InputBox = (
  { setValue, placeholder, type, isFail, maxLength, children }: 
  {
    setValue: React.Dispatch<React.SetStateAction<string>>, 
    placeholder: string,
    type?: string,
    isFail?: boolean,
    maxLength?: number,
    children?: React.ReactNode,
  }
) => {
  return (
    <div
      className={`py-0.5 border-1 flex flex-1 items-center h-9 relative ${isFail ? 'border-red-500' : 'border-gray-300'}`}
    >
      <input
        className='flex-1 text-[13px] py-2 px-3 focus:outline-none placeholder:text-gray-300'
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
        type={type ?? 'text'}
      />

      <div className='absolute right-0'>
        { children }
      </div>
    </div>
  );
}

export default InputBox;