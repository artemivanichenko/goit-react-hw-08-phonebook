import PropTypes from 'prop-types';
import { ContactInput } from 'components/ContactInput/ContactInput';
import { StyledForm } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <StyledForm>
      <ContactInput
        value={value}
        onChange={onChange}
        name="filter"
        title="Find contact by name"
      />
    </StyledForm>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
