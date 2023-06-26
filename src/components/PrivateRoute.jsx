import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

const PrivateRoute = ({ children }) => {
  // const isAuth = useSelector(state => state.auth.token);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  return isLoggedIn ? children : <Navigate to="/login" state={location}/>;
};

export default PrivateRoute;
