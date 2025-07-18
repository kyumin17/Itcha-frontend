const InputBox = (
  { setValue, placeholder, type, isFail }: 
  {
    setValue: React.Dispatch<React.SetStateAction<string>>, 
    placeholder: string,
    type?: string,
    isFail?: boolean,
  }
) => {
  return (
    <div
      className={`py-0.5 border-1 flex items-center h-11 ${isFail ? 'border-red-500' : 'border-gray-300'}`}
    >
      <input
        className='flex-1 text-[15px] py-2 px-3 focus:outline-none placeholder:text-gray-400'
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        type={type ?? 'text'}
      />
    </div>
  );
}

export default InputBox;