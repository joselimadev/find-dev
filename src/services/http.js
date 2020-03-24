import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.github.com/users/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'token a9444c9b85772c527076763f376f8682acbe3259',
  },
});

export default client;
