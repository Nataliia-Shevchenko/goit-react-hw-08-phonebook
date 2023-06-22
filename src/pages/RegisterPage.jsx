import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from 'redux/auth/auth-operations';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'name') {
      setName(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log({ email, password, name });
    dispatch(
      register({
        // name: form.elements.name.value,
        // email: form.elements.email.value,
        // password: form.elements.password.value,
        name: name,
        email: email,
        password: password,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        ></input>
      </label>
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
      <button
        type="submit"
        disabled={!email || !password}
      >
        Register
      </button>
      <Link to="/login">Log In</Link>
    </form>
  );
};

export default RegisterPage;
