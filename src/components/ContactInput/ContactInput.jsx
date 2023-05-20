import PropTypes from 'prop-types';

import { StyledInput, StyledTitle } from './ContactInput.styled';

export const ContactInput = ({ title, name, type, value, onChange }) => {
  return (
    <>
      {title && <StyledTitle>{title}</StyledTitle>}
      <StyledInput
        onChange={onChange}
        type={type}
        name={name}
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};

ContactInput.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};
