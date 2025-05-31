import { RecruitReq } from '@/types/common';
import FieldSelectButton from './FieldSelectButton';

const RecruitTable = ({ recruitmentRequires, setRecruitmentRequires }
  : {
    recruitmentRequires: RecruitReq[];
    setRecruitmentRequires: React.Dispatch<React.SetStateAction<RecruitReq[]>>;
  }
) => {
  const increaseCount = (idx: number) => {
    const newRequires = [...recruitmentRequires];
    newRequires[idx].count++;
    setRecruitmentRequires(newRequires);
  }

  const decreaseCount = (idx: number) => {
    const newRequires = [...recruitmentRequires];
    if (newRequires[idx].count > 1) newRequires[idx].count--;
    setRecruitmentRequires(newRequires);
  };

  const addRecruitmentRequire = () => {
    setRecruitmentRequires((prev) => [
      ...prev,
      { field: null, count: 1 }
    ]);
  };

  return (
    <div className='relative w-80'>
      <table>
        <tbody>
          <tr>
            <th className='text-[13px] font-normal text-white bg-neutral-700 w-40 py-1.5 rounded-tl-md border-r-1'>
              모집 분야
            </th>
            <th className='text-[13px] font-normal text-white bg-neutral-700 w-40 py-1.5 rounded-tr-md'>
              모집 인원
            </th>
          </tr>
          {recruitmentRequires.map((require, idx) => (
            <tr 
              className='border-b-1 border-neutral-300'
              key={idx}
            >
              <td className='bg-neutral-100 py-2 text-center text-[13px]'>
                <FieldSelectButton
                  recruitmentRequires={recruitmentRequires} 
                  setRecruitmentRequires={setRecruitmentRequires}
                  idx={idx}
                />
              </td>
              <td className='py-2 text-center text-[13px]'>
                <div className='flex gap-4 justify-center items-center'>
                  <button 
                    className={`bg-neutral-100 text-neutral-700 h-5 w-5 rounded-sm leading-5 text-xl ${require.count === 1 ? 'invisible' : ''}`}
                    onClick={() => {decreaseCount(idx)}}
                  >
                    <div className='relative top-[-2px]'>
                      -
                    </div>
                  </button>
                  <div>
                    {require.count}
                  </div>
                  <button 
                    className={`bg-neutral-100 text-neutral-700 h-5 w-5 rounded-sm leading-5 text-xl ${require.count === 20 ? 'invisible' : ''}`}
                    onClick={() => {increaseCount(idx)}}
                  >
                    +
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <img 
        className='absolute w-6.5 h-6.5 right-[50%] translate-x-[50%] translate-y-[-50%] cursor-pointer'
        src='/image/icon/plus-circle.svg' 
        alt='add' 
        onClick={addRecruitmentRequire}
      />
    </div>
  );
};

export default RecruitTable;