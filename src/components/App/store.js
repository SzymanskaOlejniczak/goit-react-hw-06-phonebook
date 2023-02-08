import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "../../redux/slice";

export const store = configureStore({
    reducer: {
        contactsReducer,
    },
});