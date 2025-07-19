const SearchBar = () => {
  return (
    <div
      className={'py-0.5 border-1 flex flex-1 items-center h-9 relative border-gray-500 rounded-sm'}
    >
      <input
        className='flex-1 text-[13px] py-2 px-3 focus:outline-none placeholder:text-gray-300'
        placeholder='기술 스택을 검색하세요'
        onChange={(e) => {}}
        maxLength={100}
      />

      <div className='absolute right-3'>
        <img 
          src='/image/icon/search.svg' 
          className='w-5 h-5'
        />
      </div>
    </div>
  );
}

export default SearchBar;