import axios from 'axios';

const MockAPI = axios.create({
  baseURL: 'https://63569ed12712d01e14f89200.mockapi.io',
});

export default MockAPI;
