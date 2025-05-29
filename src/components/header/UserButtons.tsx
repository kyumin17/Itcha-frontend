import MyButton from './MyButton';
import WritingButton from './WritingButton';

const UserButtons = () => {
  return (
    <div className='flex gap-7 align-center'>
      <WritingButton />
      <MyButton />
    </div>
  );
};

export default UserButtons;