// import { Button } from '@mui/material';
import { StyledNavLink } from 'Global.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'Redux/Auth/AuthOperations';
import { selectAuthUser, selectIsOnline } from 'Redux/selectors';
import { StyledDiv } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(selectAuthUser);
  const isUserOnline = useSelector(selectIsOnline);
  const handleLogOut = () => {
    console.log('handleLogOut');
    dispatch(logOutThunk());
  };
  return isUserOnline ? (
    <StyledDiv>
      <p>{email}</p>
      {/* <Button variant="contained" onClick={handleLogOut}>
        Logout
      </Button> */}
    </StyledDiv>
  ) : (
    <StyledDiv>
      <StyledNavLink to="/login">Log in</StyledNavLink>
      <StyledNavLink to="/register">Register</StyledNavLink>
    </StyledDiv>
  );
};
