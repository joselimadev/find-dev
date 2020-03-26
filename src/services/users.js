import Http from './http'; // não precisa de .js

export const getUser = (username) => Http.get(`/${username}`);

// eslint-disable-next-line prettier/prettier
export const getRepos = (username, page = 1) => Http.get(`/${username}/repos?page=${page}&per_page=15`);
