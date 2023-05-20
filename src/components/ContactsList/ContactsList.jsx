import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'Redux/operations';
// import { useSelector } from 'react-redux';
import { selectContacts } from 'Redux/selectors';
import {
  StyledBtnDelete,
  StyledContactInfo,
  StyledItem,
} from './ContactsList.styled';

export const ContactsList = ({ contacts }) => {
  // const { isLoading } = useSelector(selectContacts);
  console.log(contacts);
  const dispatch = useDispatch();
  return (
    <ul>
      {contacts.map(({ id, name, phone }) => {
        const handleDelete = () => dispatch(deleteContactThunk(id));
        return (
          <StyledItem key={id}>
            <StyledContactInfo>{name}:</StyledContactInfo>
            <StyledContactInfo>{phone}</StyledContactInfo>
            <StyledBtnDelete onClick={handleDelete}>Delete</StyledBtnDelete>
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
