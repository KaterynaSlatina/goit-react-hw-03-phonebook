import React from 'react';
import css from './Filter.module.css';

export const Filter = ({ filter, changeFilter }) => {
  return (
    <label>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
};
