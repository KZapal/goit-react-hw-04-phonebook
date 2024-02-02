import React, { useState } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const ContactForm = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const addContact = event => {
    event.preventDefault();
    let newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };
    handleSubmit(newContact);
    resetForm();
  };

  return (
    <form className={css.form} onSubmit={addContact}>
      <input
        className={css.formInput}
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name: full name"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <input
        className={css.formInput}
        type="number"
        name="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        placeholder="Phone number: seven digits"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default ContactForm;
