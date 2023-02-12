import { createAction } from "@reduxjs/toolkit";


const addContacts = createAction("items/addContacts");
const deleteContacts = createAction("items/deleteContacts");
const filterContacts = createAction("items/filterContac");

export { addContacts, deleteContacts, filterContacts };