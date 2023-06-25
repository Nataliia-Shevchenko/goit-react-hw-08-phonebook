import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from 'redux/auth/auth-operations';
import { Form } from './RegisterForm.styled';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        required
        // id="outlined-basic"
        label="Name"
        type="text"
        variant="outlined"
        name="name"
        size="small"
      />
      <TextField
        required
        // id="outlined-basic"
        label="Email"
        type="email"
        variant="outlined"
        name="email"
        size="small"
      />
      <TextField
        required
        // id="outlined-basic"
        label="Password"
        type="password"
        variant="outlined"
        name="password"
        size="small"
      />
      <Button type="submit" variant="contained">
        Sign Up
      </Button>
      <Link to="/login">
        <NavigateNextRoundedIcon fontSize="small" />
        Log In
      </Link>
    </Form>
  );
};

export default RegisterForm;
