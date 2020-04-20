<template>
  <div class="main">
    <div class="container d-flex" v-if="loading">
      <div class="img-box align-items-center">
        <div class="text-center mb-4">
          <img class="mb-2 img-fluid" src="../assets/splash_loading.svg" alt width="700px" />
          <h4 class="h4 mb-3 font-weight-normal">Loading....</h4>
        </div>
      </div>
    </div>
    <div
      class="container-xl px-3 mt-4 mb-4 clearfix d-flex justify-content-between align-items-center"
      v-if="!loading"
    >
      <router-link to="/find">
        <div>
          <i class="fa fa-arrow-left btn-back"></i>
        </div>
      </router-link>
      <h1 class="h3 font-weight-normal">Find Dev</h1>
    </div>
    <div class="container d-flex" v-if="not_found">
      <div class="img-box-not-found align-items-center mt-4">
        <div class="text-center mb-4">
          <img class="mb-2 img-fluid" src="../assets/splash_notfound.svg" alt width="700px" />
          <h4 class="h4 mb-3 font-weight-normal">
            Não encontramos o Dev que você procurava. Sorry!
          </h4>
        </div>
      </div>
    </div>
    <div class="container-xl px-3 mt-4 clearfix" v-if="!loading && !not_found">
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
          <Pagination
            :page="current_page"
            :repos="profile.public_repos"
            @navigate="navigate"
            v-if="profile.public_repos"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Profile from '@/components/Profile.vue';
import Repository from '@/components/Repository.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Dev',
  props: ['username'],
  components: {
    Profile,
    Repository,
    Pagination,
  },
  data() {
    return {
      loading: true,
      not_found: false,
      current_page: 1,
    };
  },
  methods: {
    ...mapActions(['getUser', 'getRepos']),
    navigate(page) {
      this.loading = true;
      this.$store
        .dispatch('getRepos', { username: this.username, page })
        .then(() => {
          this.loading = false;
          this.current_page = page;
        })
        .catch(() => {
          this.loading = false;
          this.not_found = true;
        });
    },
  },
  created() {
    this.loading = true;
    Promise.all([
      this.$store.dispatch('getUser', this.username),
      this.$store.dispatch('getRepos', { username: this.username, page: this.current_page }),
    ])
      .then(() => {
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        this.not_found = true;
      });
  },
  computed: {
    ...mapState(['profile', 'repositories']),
    list() {
      return this.repositories;
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
.container,
.main {
  height: 100%;
}
.img-box {
  width: 100%;
  max-width: 800px;
  padding: 15px;
  margin: auto;
}

.img-box-not-found {
  width: 100%;
  max-width: 800px;
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
}
</style>
