import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'https://conduit.productionready.io/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default customAxios;
