import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from 'redux/auth/auth-operations';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log({ email, password });
    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        navigate('/');
        toast.success('Welcome!');
      })
      .catch(() => toast.error('Error Login'));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          // disabled={!email}
          onChange={handleChange}
        ></input>
      </label>
      <button type="submit">Log In</button>
      <Link to="/register">Sign Up</Link>
    </form>
  );
};

export default LoginPage;
