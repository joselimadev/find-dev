import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.github.com/users/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${process.env.VUE_APP_GIT_TOKEN ? process.env.VUE_APP_GIT_TOKEN : ''}`,
  },
});
export default client;
