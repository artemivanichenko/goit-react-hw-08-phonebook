import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsOnline } from 'Redux/selectors';

export const HomePage = () => {
  const isOnline = useSelector(selectIsOnline);
  return (
    <>
      <h1>Welcome to Contacts WebSite!</h1>
      <p>
        Our WebSite provides a service, where you can store your contacts, add
        the new one or delete existing contacts.
        {isOnline ? (
          <>
            Go to the <NavLink to="/contacts">contacts page</NavLink> and enjoy!
          </>
        ) : (
          <>
            You need to have an account for using our site. Please,{' '}
            <NavLink to="/login">log in</NavLink> to the system or{' '}
            <NavLink to="/register">create an account</NavLink>.
          </>
        )}
      </p>
    </>
  );
};
