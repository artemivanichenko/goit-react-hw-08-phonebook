// import { Section, ContactForm, Filter, ContactsList } from './index';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  // selectContacts,
  // selectFilter,
  selectIsRefreshing,
} from 'Redux/selectors';
// import { addContactThunk, fetchContactsThunk } from 'Redux/operations';
import { useEffect } from 'react';
// import { filterContact } from 'Redux/ContactSlice';
import { Oval } from 'react-loader-spinner';
import { Layout } from './Layout/Layout';
import { HomePage } from './Page/Home';
import { RegisterPage } from './Page/Register';
import { LoginPage } from './Page/Login';
import { PublicRoute } from './HOC/PublicRoute';
import { ContactsPage } from './Page/Contacts';
import { PrivateRoute } from './HOC/PrivateRoute';
import { NotFoundPage } from './Page/NotFound';
import { refreshThunk } from 'Redux/Auth/AuthOperations';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchContactsThunk());
  // }, [dispatch]);
  // const filterChange = e => {
  //   console.log(e.target.value);
  //   dispatch(filterContact(e.target.value));
  // };
  // const handleAddContact = ({ name, phone }) => {
  //   if (
  //     contacts.find(contact => contact.name === name || contact.phone === phone)
  //   ) {
  //     alert('This name is already in the contact list');
  //     return;
  //   }
  //   dispatch(addContactThunk({ name, phone }));
  // };

  // const getFilterContacts = () => {
  //   if (filter) {
  //     console.log(filter);
  //     const normalizedFilter = filter.toLowerCase();
  //     console.log(normalizedFilter);
  //     return contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(normalizedFilter)
  //     );
  //   }
  //   console.log(contacts);
  //   return contacts;
  // };

  return isRefreshing ? (
    <Oval
      height={80}
      width={80}
      color="#065893"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#0f5cc7"
      strokeWidth={8}
      strokeWidthSecondary={8}
    />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
