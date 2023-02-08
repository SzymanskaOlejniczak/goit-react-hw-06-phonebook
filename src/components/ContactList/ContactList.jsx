import { deleteContact } from "../../redux/slice";
import { useSelector, useDispatch } from "react-redux";
import style from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(state => state.contactsReducer.items.filter(contact => contact.name.toLowerCase().includes(state.contactsReducer.filter)));
  const dispatch = useDispatch();

  const deleteContacts = data => {
        dispatch(deleteContact(data));
    };
    return (
    <ul className={style.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={style.contact} 
          key={id}>
          <p>{name}:</p>
          <p>{number}</p>
          <button
            className={style.btn}
            type="button"
            onClick={() => deleteContacts(id)}
          >
            <span>Delete</span> 
          </button>
        </li>
      ))}
    </ul>
    )
};



