import FilterGroup from './FilterGroup';
import SearchBox from './SearchBox';

const ToolBar = () => {
  return (
    <div className='h-15 bg-zinc-100 pl-15 flex items-center'>
      <FilterGroup />
      <div className='absolute right-15'>
        <SearchBox />
      </div>
    </div>
  );
}

export default ToolBar;