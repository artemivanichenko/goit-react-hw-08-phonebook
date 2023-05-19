import PropTypes from 'prop-types';
import { ContactInput } from 'components/ContactInput/ContactInput';
import { StyledForm } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContact } from 'Redux/filterSlice';

export const Filter = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <StyledForm>
      <ContactInput
        value={value}
        onChange={event => dispatch(filterContact(event.currentTarget.value))}
        name="filter"
        title="Find contact by name"
      />
    </StyledForm>
  );
};

Filter.propTypes = {
  // onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
