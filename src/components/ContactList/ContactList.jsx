import React from 'react';
import ContactElement from 'components/ContactElement';
import { useSelector } from 'react-redux';
import { selectContactsList } from 'redux/contacts/selectors';
import { List } from './ContactList.styled';



const ContactList = () => {
 
  // const visibleContacts = useSelector(selectVisibleContacts)

  const contacts = useSelector(selectContactsList);
  
  return (
    <List>
    {
      contacts?.map(contact => (
        <ContactElement contact={contact} key={contact.id}  />
      ))
      }
    </List>
  );
};

export default ContactList;


