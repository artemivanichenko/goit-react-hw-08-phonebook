import { Section, ContactForm, Filter, ContactsList } from './index';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'Redux/selectors';
import { addContactThunk, fetchContactsThunk } from 'Redux/operations';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  console.log(contacts);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const handleAddContact = (name, number) => {
    console.log(name);
    console.log(number);

    if (
      contacts.find(
        contact => contact.name === name || contact.number === number
      )
    ) {
      alert('This name is already in the contact list');
      return;
    }
    dispatch(addContactThunk({ name, number }));
  };

  const getFilterContacts = () => {
    if (filter) {
      console.log(filter);
      const normalizedFilter = filter.toLowerCase();
      console.log(normalizedFilter);
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
    console.log(contacts);
    return contacts;
  };

  return (
    <>
      <Section title="PhoneBook">
        <ContactForm onSubmit={handleAddContact} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} />
        <ContactsList contacts={getFilterContacts()} />
      </Section>
    </>
  );
};
