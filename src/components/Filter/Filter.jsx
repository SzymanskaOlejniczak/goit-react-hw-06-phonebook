import { filterContact } from "../../redux/slice";
import { useSelector, useDispatch } from "react-redux";
import style from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(state => state.contactsReducer.filter);
  const dispatch = useDispatch(); 

  const changeFilter = data => {
      dispatch(filterContact(data));
  };
  return (
    <label className={style.label}>
      Find contacts by name
      <input 
        className={style.input} 
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Enter name" 
        value={filter} 
        onChange={e => changeFilter(e.target.value)} />
    </label>
  )
};



