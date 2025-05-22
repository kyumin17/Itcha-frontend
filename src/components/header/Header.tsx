import HeaderFrame from './HeaderFrame';
import StartButtons from './StartButtons';
import UserButton from './UserButton';
import { useSession } from 'next-auth/react';

const Header = () => {
  const { data: session, status } = useSession();

  return (
    <HeaderFrame children={session ? <UserButton /> : <StartButtons />} />
  );
};

export default Header;