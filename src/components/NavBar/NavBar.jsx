import { StyledNavLink } from 'Global.styled';
import { useSelector } from 'react-redux';
import { selectIsOnline } from 'Redux/selectors';
import { StyledNav } from './NavBar.styled';

export const NavBar = () => {
  const isOnline = useSelector(selectIsOnline);
  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isOnline && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </StyledNav>
  );
};
