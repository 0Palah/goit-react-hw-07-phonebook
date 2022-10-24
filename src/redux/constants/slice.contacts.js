import { createAction, createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initiale-state.contacts';
import { nanoid } from 'nanoid';

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
  reducers: {
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

    // Виконається в момент старту HTTP-запиту
    fetchingInProgress(state) {
      state.isLoading = true;
    },

    // Виконається якщо HTTP-запит завершився успішно
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    // Виконається якщо HTTP-запит завершився з помилкою
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
// export const { deleteContactAction } = contactsSlice.actions;
export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsSlice.actions;