import React from 'react';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      <div className={css.contact}>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p className={css.contactNames}>
              {name} : {number}
            </p>

            <button
              className={css.contactBtn}
              type="button"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </div>
    </ul>
  );
};
