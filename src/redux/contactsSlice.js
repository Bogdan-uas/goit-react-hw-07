import { createSlice } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
contacts: {
    items: [],
},
filters: {
    name: "",
},
};

const contactsSlice = createSlice({
name: "phonebook",
initialState: INITIAL_STATE,
    reducers: {
    setInitialContacts(state, action) {
        state.contacts.items = action.payload;
    },
    addContact(state, action) {
    state.contacts.items.push(action.payload);
    },
    deleteContact(state, action) {
    state.contacts.items = state.contacts.items.filter(
        (contact) => contact.id !== action.payload
    );
    },
},
});

export const { setInitialContacts, addContact, deleteContact } =
    contactsSlice.actions;

export const phoneBookReducer = contactsSlice.reducer;