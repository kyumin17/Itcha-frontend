const PageWrapper: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className='w-full mt-14'>
        {children}
    </div>
  );
}

export default PageWrapper;