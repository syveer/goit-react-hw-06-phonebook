import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  initialState: {
    items: [
      { id: 'id-1', name: 'Rolo', number: '+40799999999' },
      { id: 'id-2', name: 'Peri', number: '+40788888888' },
      { id: 'id-3', name: 'Freno', number: '+40777777777' },
      { id: 'id-4', name: 'Caram', number: '+40766666666' },
    ],
    filter: '',
  },
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactSlice.actions;
export default contactSlice.reducer;
