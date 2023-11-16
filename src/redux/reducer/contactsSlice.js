import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.find(contact => contact.name === action.payload.name)
          ? alert(`${state.name} is already in contacts.`)
          : state.push(action.payload);
        localStorage.setItem('contacts', JSON.stringify(state));
      },
      prepare: (name, number) => {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: (state, { payload }) => {
      return state.filter(contact => contact.name !== payload);
    },
    startContact: (state, { payload }) => {
      return (state = payload);
    },
  },
});

export const { addContact, deleteContact, startContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
