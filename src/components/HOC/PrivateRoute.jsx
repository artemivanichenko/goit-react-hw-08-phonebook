import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsOnline } from 'Redux/selectors';

export const PrivateRoute = ({ children }) => {
  console.log(children);
  const location = useLocation();
  const isOnline = useSelector(selectIsOnline);

  if (!isOnline) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
