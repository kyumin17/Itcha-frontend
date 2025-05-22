const HeaderFrame = ({ children }: { children: any }) => {
  return (
    <div className='h-14 flex items-center pl-8 shadow-md'>
      <div className='text-red-700 text-xl font-thin'>
        Itcha
      </div>
      <div className='absolute right-8 flex items-center'>
        {children}
      </div>
    </div>
  );
}

export default HeaderFrame;