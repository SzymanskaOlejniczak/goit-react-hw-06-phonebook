import { createReducer } from "@reduxjs/toolkit";
import { addContacts } from "./actions";
import { deleteContacts } from "./actions";

const initialState = () => {
  return (
    JSON.parse(window.localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
};
export const contactsReducer = createReducer(initialState(), {
    [addContacts]: (state, action) => {state.push(action.payload)},  
    [deleteContacts]: (state, action) => state.filter(({ id }) => id !== action.payload),
  });
export default contactsReducer;