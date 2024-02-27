// ContactBook.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addContact,
  deleteContact,
  setFilter,
} from '../Store/ContactSlice/ContactSlice';
import styles from './ContactBook.module.css';

const ContactBook = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(
    contact =>
      contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddContact = () => {
    const newContact = {
      id: Date.now(),
      phoneNumber,
    };
    dispatch(addContact(newContact));
    setName('');
    setPhoneNumber('');
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={styles.phonebookContainer}>
      <h1 className={styles.title}>Phonebook</h1>
      <div className={styles.addContactForm}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
        />
        <button className={styles.addContactButton} onClick={handleAddContact}>
          Add Contact
        </button>
      </div>
      <div className={styles.filter}>
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Search Contacts"
        />
      </div>
      <ul className={styles.contactList}>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={styles.contactItem}>
            <div>
              <span className={styles.contactName}>{contact.name}</span>
              <span className={styles.contactPhone}>{contact.phoneNumber}</span>
            </div>
            <button
              className={styles.deleteButton}
              onClick={() => handleDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactBook;
