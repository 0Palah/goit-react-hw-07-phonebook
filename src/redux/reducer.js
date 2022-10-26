import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice.contacts';
import { filterReducer } from './filter/slice.filter';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
