import React, { useState, useEffect } from 'react';
import getContactsLocalStorage from './localStorage';
import ContactForm from './Form/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState(getContactsLocalStorage());
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = newContact => {
    const contactIn = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (contactIn) {
      alert('This contact already is in contacts.');
    } else {
      const updatedContacts = [...contacts, newContact];
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      setContacts(updatedContacts);
    }
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const filteredList = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <div className={css.mainBlock}>
      <h2 className={css.header}>Phone Book</h2>
      <ContactForm handleSubmit={handleSubmit} />
      <h2 className={css.header}>Contacts</h2>
      <Filter value={filter} changeFilter={changeFilter} />
      <ContactList contacts={filteredList()} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
