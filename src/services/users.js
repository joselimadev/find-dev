import Http from './http'; // não precisa de .js

export const getUser = (username) => Http.get(`/${username}`);

export const getRepos = (username) => Http.get(`/${username}/repos`);
