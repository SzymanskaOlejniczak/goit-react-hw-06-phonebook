import React, {useState} from 'react';
import { nanoid } from "nanoid";
import { addContact } from "../../redux/slice";
import { useDispatch } from "react-redux";
import { FcContacts } from 'react-icons/fc';
import style from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
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
  const formSubmit = event => {
    dispatch(addContact(event));
};
  const handleSubmit = event => {
    event.preventDefault();
    const data = {
            id: nanoid(),
            name,
            number
          }
          formSubmit(data);
          reset();
  };

  const reset = () => {
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



