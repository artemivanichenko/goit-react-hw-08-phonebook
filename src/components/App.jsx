import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';

export class App extends Component {
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
  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  filterContacts = () => {
    const { filter, contacts } = this.state;
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
    console.log(contacts);
  };

  render() {
    const { name, number, filter } = this.state;
    const contacts = this.filterContacts();
    return (
      <>
        <Section title="PhoneBook">
          <ContactForm
            name={name}
            number={number}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </Section>
        <Section title="Contacts">
          <Filter name={name} onChange={this.handleChange} value={filter} />
          <ContactsList contacts={contacts} onClick={this.handleDelete} />
        </Section>
      </>
    );
  }
}
