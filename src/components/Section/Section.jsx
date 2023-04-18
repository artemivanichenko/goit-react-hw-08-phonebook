import { StyledItem, StyledSection, StyledTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <StyledItem>
        {title && <StyledTitle>{title}</StyledTitle>}
        {children}
      </StyledItem>
    </StyledSection>
  );
};
