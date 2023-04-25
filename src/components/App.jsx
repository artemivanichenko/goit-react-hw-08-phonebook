import { Component } from 'react';
import { nanoid } from 'nanoid';
import { contacts } from 'data/contacts';
import { Section, ContactForm, Filter, ContactsList } from './index';

export class App extends Component {
  state = {
    contacts: contacts,
    filter: '',
  };

  handleAddContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    if (
      this.state.contacts.find(
        contact => contact.name === name || contact.number === number
      )
    ) {
      alert('This name is already in the contact list');
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
    this.setState({ name: '', number: '' });
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
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
    return contacts;
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const contacts = this.filterContacts();

    return (
      <>
        <Section title="PhoneBook">
          <ContactForm onSubmit={this.handleAddContact} />
        </Section>
        <Section title="Contacts">
          <Filter onChange={this.handleChange} value={filter} />
          <ContactsList contacts={contacts} onClick={this.handleDelete} />
        </Section>
      </>
    );
  }
}
