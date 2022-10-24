import { createAction, createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initiale-state.contacts';
import { nanoid } from 'nanoid';
import { deleteContact, fetchContacts } from 'redux/operations';

// export const addContactAction = createAction(
//   'contacts/addContactAction',
//   user => ({
//     payload: {
//       ...user,
//       id: nanoid(10),
//     },
//   })
// );

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  //   deleteContactAction: (state, action) => {
  //     state.contacts = state.contacts.filter(
  //       user => user.id !== action.payload
  //     );
  //   },
  // },
  // extraReducers: {
  //   [addContactAction]: (state, action) => {
  //     state.contacts.unshift(action.payload);
  //   },
  // // Виконається в момент старту HTTP-запиту
  // fetchingInProgress(state) {
  //
  // },
  // // Виконається якщо HTTP-запит завершився успішно
  // fetchingSuccess(state, action) {
  //   state.isLoading = false;
  //   state.error = null;
  //   state.items = action.payload;
  // },
  // // Виконається якщо HTTP-запит завершився з помилкою
  // fetchingError(state, action) {
  //   state.isLoading = false;
  //   state.error = action.payload;
  // },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
// export const { deleteContactAction } = contactsSlice.actions;
// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactsSlice.actions;
