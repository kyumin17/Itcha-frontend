import HeaderFrame from './HeaderFrame';
import GuestButtons from './GuestButtons';
import UserButtons from './UserButtons';
import { useSession } from 'next-auth/react';

const Header = () => {
  const { data: session, status } = useSession();

  return (
    <HeaderFrame children={session ? <UserButtons /> : <GuestButtons />} />
  );
};

export default Header;