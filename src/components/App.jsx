// import React, { useEffect } from 'react';
// import ContactForm from 'components/ContactForm';
// import Filter from 'components/Filter';
// import ContactList from 'components/ContactList';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectError, selectIsLoading } from 'redux/selectors';
// import { fetchContacts } from 'redux/operations';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

// import RegisterPage from 'pages/RegisterPage';
// import LoginPage from 'pages/LoginPage';
import { lazy } from 'react';
// import ContactsPage from 'pages/ContactsPage';

const HomePage = lazy(() => import('../pages/HomePage'))
const RegisterPage = lazy(() => import('../pages/RegisterPage'))
const LoginPage = lazy(() => import('../pages/LoginPage'))
const ContactsPage = lazy(() => import('../pages/ContactsPage'))

const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

 

  return (
    <>
      

      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<HomePage/>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={< ContactsPage/>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
