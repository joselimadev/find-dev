import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.github.com/users/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;
