import React from 'react';
import ContactElement from 'components/ContactElement';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { List } from './ContactList.styled';



const ContactList = () => {
 
  const visibleContacts = useSelector(selectVisibleContacts)
  
  return (
    <List>
    {
      visibleContacts.map(contact => (
        <ContactElement contact={contact} key={contact.id}  />
      ))
      }
    </List>
  );
};

export default ContactList;


