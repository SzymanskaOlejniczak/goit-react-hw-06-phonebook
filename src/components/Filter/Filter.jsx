import { filterContacts } from "../../redux/actions";
import {  useDispatch } from "react-redux";
import style from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch(); 

  const changeFilter = e => {
    const value =  e.target.value.toLowerCase() 
    dispatch(filterContacts(value));
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
        onChange={changeFilter} />
    </label>
  )
};



