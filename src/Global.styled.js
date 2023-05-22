import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding-bottom: 10px;
  padding-top: 10px;
  color: black;
  &.active {
    color: white;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.$center ? 'center' : 'flex-start')};
  gap: 15px;
  background-color: #b3d7d7;
  padding: 50px;
  margin-top: 15px;
  margin-left: ${props => (props.$center ? 'auto' : 0)};
  margin-right: ${props => (props.$center ? 'auto' : 0)};
  border-radius: 10px;
  max-width: 400px;
`;
