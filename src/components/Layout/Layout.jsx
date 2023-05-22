import { NavBar } from 'components/NavBar/NavBar';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Outlet } from 'react-router-dom';
import { StyledHeader } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      {' '}
      <StyledHeader>
        <NavBar />
        <UserMenu />
      </StyledHeader>
      <main>
        <Outlet />
      </main>
    </>
  );
};
