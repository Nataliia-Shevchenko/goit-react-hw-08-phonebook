import React from 'react';
import { FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

const Filter = () => {
  const { filter } = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <h2>Contacts</h2>
      <label>
        Find contact by name
        <FilterInput type="text" value={filter} onChange={handleFilterChange} />
      </label>
    </>
  );
};

export default Filter;
