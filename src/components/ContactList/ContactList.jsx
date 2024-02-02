import React from 'react';
import ContactListItem from './ContactListItem';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className={css.contactList}>
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onClick={() => deleteContact(id)}
          />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContacts: PropTypes.func,
};

export default ContactList;
