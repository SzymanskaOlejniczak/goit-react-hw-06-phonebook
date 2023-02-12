import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { getContacts } from 'redux/selectors';
import { ContactList } from '../ContactList/ContactList';
import style from './App.module.css';

export const App=()=> {
  const contacts = useSelector(getContacts);
  useEffect(() => {
    if (contacts !== []) {
      localStorage.setItem('savedContacts', JSON.stringify(contacts));
    }
  }, [contacts]);
    return (
      <div className={style.form}>
        <h1>Phonebook</h1>
        <ContactForm  />
        <h2>Contacts</h2>
        <Filter  />
        <ContactList
      
        />
      </div>
    );
  }



