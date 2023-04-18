import { ContactInput } from 'components/ContactInput/ContactInput';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Section } from '../Section/Section';
import { StyledBtnForm, StyledForm } from './PhoneBook.styled';

export class PhoneBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'David Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    const { value, name } = e.target;
    console.log(`${name}:${value}`);
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };
  render() {
    const { contacts, name, number } = this.state;

    return (
      <>
        <Section title="PhoneBook">
          <StyledForm onSubmit={this.handleSubmit}>
            <ContactInput
              type="text"
              name="name"
              value={name}
              title="Name"
              onChange={this.handleChange}
            />
            <br />
            <ContactInput
              type="number"
              name="number"
              value={number}
              title="Number"
              onChange={this.handleChange}
            />
            <br />
            <StyledBtnForm type="submit">Add Contact</StyledBtnForm>
          </StyledForm>
        </Section>
        <Section title="Contacts">
          <Filter name="find" />
          <ContactsList contacts={contacts} />
        </Section>
      </>
    );
  }
}
