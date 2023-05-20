import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'Redux/operations';
import { selectError, selectIsLoading } from 'Redux/selectors';
import {
  StyledBtnDelete,
  StyledContactInfo,
  StyledItem,
} from './ContactsList.styled';

export const ContactsList = ({ contacts }) => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  return (
    <>
      {' '}
      {isLoading && !error && <p>Loading contacts...</p>}
      <ul>
        {contacts.map(({ id, name, phone }) => {
          const handleDelete = () => dispatch(deleteContactThunk(id));
          return (
            <StyledItem key={id}>
              <StyledContactInfo>{name}:</StyledContactInfo>
              <StyledContactInfo>{phone}</StyledContactInfo>
              <StyledBtnDelete onClick={handleDelete} disabled={isLoading}>
                Delete
              </StyledBtnDelete>
            </StyledItem>
          );
        })}
      </ul>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func,
};
