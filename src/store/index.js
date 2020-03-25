import Vue from 'vue';
import Vuex from 'vuex';

import { getUser, getRepos } from '@/services/users';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    repositories: [],
  },
  mutations: {
    addProfile(state, payload) {
      state.profile = payload;
    },
    addRepos(state, payload) {
      state.repositories = payload;
    },
  },
  actions: {
    getUser(context, param) {
      context.commit('addProfile', {});
      return getUser(param)
        .then((response) => response.data)
        .then((user) => {
          context.commit('addProfile', user);
        });
    },
    getRepos(context, param) {
      context.commit('addRepos', []);
      return getRepos(param)
        .then((response) => response.data)
        .then((repos) => {
          context.commit('addRepos', repos);
        });
    },
  },
  modules: {},
});
