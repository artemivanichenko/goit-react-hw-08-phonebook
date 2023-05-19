import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectContacts } from 'Redux/selectors';
import {
  StyledBtnDelete,
  StyledContactInfo,
  StyledItem,
} from './ContactsList.styled';

export const ContactsList = ({ contacts, onClick }) => {
  const { isLoading } = useSelector(selectContacts);
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <StyledItem key={id}>
            <StyledContactInfo>{name}:</StyledContactInfo>
            <StyledContactInfo>{number}</StyledContactInfo>
            <StyledBtnDelete onClick={() => onClick(id)} disabled={isLoading}>
              Delete
            </StyledBtnDelete>
          </StyledItem>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
