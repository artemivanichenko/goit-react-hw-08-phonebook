import {
  StyledBtnDelete,
  StyledContactInfo,
  StyledItem,
} from './ContactsList.styled';

export const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <StyledItem key={id}>
            <StyledContactInfo>{name}:</StyledContactInfo>
            <StyledContactInfo>{number}</StyledContactInfo>
            <StyledBtnDelete>Delete</StyledBtnDelete>
          </StyledItem>
        );
      })}
    </ul>
  );
};
