const HeaderFrame = ({ children }: { children: any }) => {
  return (
    <div className='h-14 flex items-center pl-8 shadow-md fixed top-0 left-0 right-0 z-1 bg-white'>
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