import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Contact, DelButton } from './ContactElement.styled';
import { deleteContact } from 'redux/contacts/operations';
import { GiRotaryPhone } from 'react-icons/gi';


const ContactElement = ({ contact }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <Contact>
        <GiRotaryPhone size="15" color='red'/> {name}: {number}
        <DelButton type="button" onClick={handleDelete}>
          Delete
        </DelButton>
      </Contact>
    </>
  );
};

export default ContactElement;

ContactElement.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
