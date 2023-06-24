import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

export const Navigation = () => {
  const isAuth = useSelector(state => state.auth.token);
  return (
    <>
      <nav>
        <NavLink to="/">
          <Button sx={{ color: 'white' }}>Home </Button>
        </NavLink>
        {isAuth && <NavLink to="/contacts"><Button sx={{ color: 'white' }}>Phonebook</Button></NavLink>}
      </nav>
    </>
  );
};
