import { useEffect } from 'react';
import { ContactForm, ContactsList, Filter, Section } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'Redux/selectors';
import { filterContact } from 'Redux/ContactSlice';
import { addContactThunk, fetchContactsThunk } from 'Redux/operations';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  const filterChange = e => {
    console.log(e.target.value);
    dispatch(filterContact(e.target.value));
  };
  const handleAddContact = ({ name, phone }) => {
    if (
      contacts.find(contact => contact.name === name || contact.phone === phone)
    ) {
      alert('This name is already in the contact list');
      return;
    }
    dispatch(addContactThunk({ name, phone }));
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
    <div>
      <Section title="PhoneBook">
        <ContactForm onSubmit={handleAddContact} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={filterChange} />
        <ContactsList contacts={getFilterContacts()} />
      </Section>
    </div>
  );
};
