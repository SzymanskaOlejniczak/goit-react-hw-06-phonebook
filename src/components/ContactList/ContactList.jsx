import { deleteContacts } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { getFilterValue, getContacts } from 'redux/selectors';
import { FcEmptyTrash} from 'react-icons/fc';
import style from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.replace(/-|\s/g, '').includes(filter.replace(/-|\s/g, ''))
  );

  const deleteContact = data => {
        dispatch(deleteContacts(data));
    };
    return (
    <ul className={style.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={style.contact} 
          key={id}>
          <p>{name}:</p>
          <p>{number}</p>
          <button
            className={style.btn}
            type="button"
            onClick={() => deleteContact(id)}
          >
            <span>Delete</span> <FcEmptyTrash />
          </button>
        </li>
      ))}
    </ul>
    )
};



