import { Section, ContactForm, Filter, ContactsList } from './index';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'Redux/selectors';
import { deleteContact, addContacts, filterContact } from 'Redux/ContactSlice';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleAddContact = (name, number) => {
    if (
      contacts.find(
        contact => contact.name === name || contact.number === number
      )
    ) {
      alert('This name is already in the contact list');
      return;
    }
    dispatch(addContacts({ name, number }));
  };

  const handleFilter = e => {
    dispatch(filterContact(e.target.value));
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
