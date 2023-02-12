import React, {useState} from 'react';
import { nanoid } from "nanoid";
import { getContacts } from 'redux/selectors';
import { addContacts } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { FcContacts } from 'react-icons/fc';
import style from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch(); 
  
  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };
  const formSubmit = data => {
    
    const isNameExist = contacts.find(
      contact => contact.name.toLocaleLowerCase() === data.name.toLocaleLowerCase(),
    );

    if (isNameExist !== undefined) {
      alert(`${isNameExist.name} is already in contacts.`);
      return;
    }
    const contactNew = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    dispatch(addContacts(contactNew));

  };
  const handleSubmit = event => {
    event.preventDefault();
    formSubmit({name, number})
    setName('');
    setNumber('');
  };

  
    return (
      <form className={style.submit} onSubmit={handleSubmit}>
        <label className={style.label}>
          Name
          <input
            className={style.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleChange}
            required
          />
        </label>
        <label className={style.label}>
          Number
          <input
            className={style.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleChange}
            required
          />
        </label>
        <button
          className={style.btn}
          type="submit"
          disabled={!name && !number}
        >
          <span>Add contact</span> <FcContacts />
        </button>
      </form>
    );
}



