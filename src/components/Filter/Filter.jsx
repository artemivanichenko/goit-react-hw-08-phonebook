import { ContactInput } from 'components/ContactInput/ContactInput';
import { StyledForm } from 'components/PhoneBook/PhoneBook.styled';

export const Filter = ({ title, onSubmit }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <ContactInput title="Find contact by name" />
    </StyledForm>
  );
};
