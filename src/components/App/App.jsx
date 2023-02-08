
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import style from './App.module.css';

export const App=()=> {

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



