import axios from 'axios';
import {
  fetchingError,
  fetchingInProgress,
  fetchingSuccess,
} from './constants/slice.contacts';

axios.defaults.baseURL = 'https://63569ed12712d01e14f89200.mockapi.io';
export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());

    const response = await axios.get('/contacts');
    console.log(response);
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    dispatch(fetchingError(e));
  }
};
