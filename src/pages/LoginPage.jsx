import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ email, password });
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
