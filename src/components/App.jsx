import { useState } from 'react';
import { nanoid } from 'nanoid';
import { dataContacts } from '../data/contacts';
import { Section, ContactForm, Filter, ContactsList } from './index';
import { useGetLocalContacts } from 'Hooks/useGetLocalContacts';

const KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useGetLocalContacts(KEY, dataContacts);
  const [filter, setFilter] = useState('');
  // const { name, number, id } = contacts;

  const handleAddContact = (name, number) => {
    // const contact = {
    //   id: nanoid(),
    //   name,
    //   number,
    // };

    if (
      contacts.find(
        contact => contact.name === name || contact.number === number
      )
    ) {
      alert('This name is already in the contact list');
      return;
    }

    setContacts(contacts => [
      ...contacts,
      { id: nanoid(), name: name, number: number },
    ]);
  };

  const handleFilter = e => {
    setFilter(e => e.target.value);
  };
  const handleDelete = id => {
    setContacts(e => e.filter(contact => contact.id !== id));
  };
  const getFilterContacts = () => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
    // return contacts;
  };

  const filterContacts = getFilterContacts();

  return (
    <>
      <Section title="PhoneBook">
        <ContactForm onSubmit={handleAddContact} />
      </Section>
      <Section title="Contacts">
        <Filter onChange={handleFilter} value={filter} />
        <ContactsList contacts={filterContacts} onClick={handleDelete} />
      </Section>
    </>
  );
};
