// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import { dataContacts } from '../data/contacts';
import { Section, ContactForm, Filter, ContactsList } from './index';
// import { useGetLocalContacts } from 'Hooks/useGetLocalContacts';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'Redux/selectors';
// import { PersistGate } from 'redux-persist/integration/react';
import { deleteContact, setContacts, setFilter } from 'Redux/ContactSlice';

// const KEY = 'contacts';

export const App = () => {
  // const [contacts, setContacts] = useGetLocalContacts(KEY, dataContacts);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  // console.log(contacts);
  const filter = useSelector(selectFilter);
  // const [filter, setFilter] = useState('');

  const handleAddContact = (name, number) => {
    // const form = e.target;
    if (
      contacts.find(
        contact => contact.name === name || contact.number === number
      )
    ) {
      alert('This name is already in the contact list');
      return;
    }

    dispatch(setContacts({ name: name, number: number }));
    // console.log(contacts);
  };

  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  const handleDelete = id => {
    console.log(id);
    dispatch(deleteContact(id));
  };
  const getFilterContacts = () => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
    return contacts;
  };

  // const filterContacts = getFilterContacts();

  return (
    <>
      <Section title="PhoneBook">
        <ContactForm onSubmit={handleAddContact} />
      </Section>
      <Section title="Contacts">
        <Filter onChange={handleFilter} value={filter} />
        <ContactsList contacts={getFilterContacts()} onClick={handleDelete} />
      </Section>
    </>
  );
};
