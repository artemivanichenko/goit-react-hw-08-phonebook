import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'Redux/selectors';
import { useEffect } from 'react';
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
