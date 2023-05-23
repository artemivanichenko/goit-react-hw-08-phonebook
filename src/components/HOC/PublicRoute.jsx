import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Navigate, useLocation } from 'react-router-dom';
import { selectIsOnline } from 'Redux/selectors';

export const PublicRoute = ({ children }) => {
  const location = useLocation();
  const isOnline = useSelector(selectIsOnline);
  const fromPage = location.state?.from.pathname || '/';
  if (isOnline) {
    return <Navigate to={fromPage} />;
  }
  return children;
};

PublicRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
