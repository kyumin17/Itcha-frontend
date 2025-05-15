const SearchBox = () => {
  return (
    <div className='h-7 w-52 bg-white rounded-full border-1 border-red-700 items-center flex'>
      <img src='/image/icon/search.svg' alt='search' className='w-4.5 h-4.5 ml-1.5' />
      <input type='text' placeholder='검색어를 입력하세요.' className='w-full h-full text-xs pl-2 pr-1.5 focus:outline-none' />
    </div>
  );
};

export default SearchBox;