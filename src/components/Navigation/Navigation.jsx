import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <nav>
        <NavLink to="/">
          <Button sx={{ color: 'white' }}>Home </Button>
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts">
            <Button sx={{ color: 'white' }}>Phonebook</Button>
          </NavLink>
        )}
      </nav>
    </>
  );
};
