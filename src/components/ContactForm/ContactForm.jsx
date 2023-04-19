import PropTypes from 'prop-types';
import { ContactInput } from 'components/ContactInput/ContactInput';
import { StyledBtnForm, StyledForm } from './ContactForm.styled';

export const ContactForm = ({ onSubmit, onChange, name, number }) => {
  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <ContactInput
          type="text"
          name="name"
          value={name}
          title="Name"
          onChange={onChange}
        />
        <br />
        <ContactInput
          type="number"
          name="number"
          value={number}
          title="Number"
          onChange={onChange}
        />
        <br />
        <StyledBtnForm type="submit">Add Contact</StyledBtnForm>
      </StyledForm>
      ;
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
