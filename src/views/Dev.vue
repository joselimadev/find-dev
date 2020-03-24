<template>
  <div class="main">
    <div
      class="container-xl px-3 mt-4 mb-4 clearfix d-flex justify-content-between align-items-center"
    >
      <router-link to="/find">
        <div>
          <i class="fa fa-arrow-left btn-back"></i>
        </div>
      </router-link>
      <h1 class="h3 font-weight-normal">Find Dev</h1>
    </div>
    <div class="container-xl px-3 mt-4 clearfix">
      <div class="row">
        <div class="col-lg-3 col-md-4 col-12 pr-md-3 pr-xl-6">
          <Profile v-bind:profile="profile" />
        </div>
        <div class="col-lg-9 col-md-8 col-12 pl-md-2">
          <div class="row">
            <template v-for="repository in list">
              <Repository v-bind:repository="repository" v-bind:key="repository.id" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Profile from '@/components/Profile.vue';
import Repository from '@/components/Repository.vue';

import _ from 'lodash';

import { getUser, getRepos } from '@/services/users';

export default {
  name: 'Dev',
  props: ['username'],
  components: {
    Profile,
    Repository,
  },
  data() {
    return {
      profile: {},
      repositories: [],
      configs: {
        orderBy: 'stargazers_count',
        order: 'desc',
      },
    };
  },
  methods: {
    fetchUser(username) {
      getUser(username)
        .then((response) => response.data)
        .then((user) => {
          // set é usado por estamos sobrescrevendo um objeto, e ele pode perder a "reatividade"
          this.profile = user;
        })
        .then(() => {
          // this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    fetchRepos(username) {
      getRepos(username)
        .then((response) => response.data)
        .then((repos) => {
          this.repositories = repos;
        })
        .then(() => {
          // this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    Promise.all([this.fetchUser(this.username), this.fetchRepos(this.username)]).then(() => {
      console.log('pronto');
    });
  },
  computed: {
    list() {
      return _.orderBy(this.repositories, this.configs.orderBy, this.configs.order);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-back {
  font-size: 30px;
  color: #007bff;
  cursor: pointer;
}
.btn-back:hover {
  color: #0069d9;
}
</style>
