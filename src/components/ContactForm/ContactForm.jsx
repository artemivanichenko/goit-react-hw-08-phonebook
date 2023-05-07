import PropTypes from 'prop-types';
import { ContactInput } from 'components/ContactInput/ContactInput';
import { StyledBtnForm, StyledForm } from './ContactForm.styled';
import { useState } from 'react';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);

        break;

      default:
        break;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    setName(name);
    setNumber(number);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <ContactInput
          type="text"
          name="name"
          value={name}
          title="Name"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
        <br />
        <ContactInput
          type="number"
          name="number"
          value={number}
          title="Number"
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
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
