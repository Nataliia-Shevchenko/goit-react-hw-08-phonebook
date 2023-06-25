import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { Contact, DelButton } from './ContactElement.styled';
import { deleteContact } from 'redux/contacts/operations';
// import { GiRotaryPhone } from 'react-icons/gi';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactElement = ({ contact }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      {/* <Contact>
        <GiRotaryPhone size="15" color='red'/> {name}: {number}
        <DelButton type="button" onClick={handleDelete}>
          Delete
        </DelButton>
      </Contact> */}

      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <AccountCircleOutlinedIcon sx={{ color: 'blue' }} />
          <Typography variant="h6" >{name}</Typography>
          <PhoneIcon sx={{ color: 'blue' }} />
          <Typography variant="h5">
            {number}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={handleDelete}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
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
