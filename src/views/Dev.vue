<template>
  <div class="main">
    <div
      class="container-xl px-3 mt-4 mb-4 clearfix d-flex justify-content-between align-items-center"
    >
      <div v-on:click="close()"><i class="fa fa-arrow-left btn-back"></i></div>
      <h1 class="h3 font-weight-normal">Find Dev</h1>
    </div>
    <div class="container-xl px-3 mt-4 clearfix">
      <div class="row">
        <div class="col-lg-3 col-md-4 col-12 pr-md-3 pr-xl-6">
          <Profile v-bind:profile="profile" />
        </div>
        <div class="col-lg-9 col-md-8 col-12 pl-md-2">
          <div class="row">
            <template v-for="repository in repositories">
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

export default {
  name: 'Dev',
  components: {
    Profile,
    Repository,
  },
  data() {
    return {
      profile: {
        login: 'jcolscript',
        id: 30646629,
        avatar_url: 'https://avatars0.githubusercontent.com/u/30646629?v=4',
        html_url: 'https://github.com/jcolscript',
        name: 'José Lima',
        location: 'São Paulo - SP',
        bio:
          "I believe that technologies come and go, so I'm really passionate about learning new frameworks, languages ​​and paradigms.",
        public_repos: 29,
      },
      repositories: [
        {
          id: 232349065,
          name: 'adonis-1',
          html_url: 'https://github.com/jcolscript/adonis-bull',
          description: 'The easiest way to start using an asynchronous job queue with AdonisJS ⚡️',
          updated_at: '2020-01-07T15:02:41Z',
          stargazers_count: 5,
          language: 'CSS',
        },
        {
          id: 232349066,
          name: 'adonis-2',
          html_url: 'https://github.com/jcolscript/adonis-bull',
          description: 'The easiest way to start using an asynchronous job queue with AdonisJS ⚡️',
          updated_at: '2020-01-07T15:02:41Z',
          stargazers_count: 2,
          language: 'JAVASCRIPT',
        },
        {
          id: 232349067,
          name: 'adonis-3',
          html_url: 'https://github.com/jcolscript/adonis-bull',
          description: 'The easiest way to start using an asynchronous job queue with AdonisJS ⚡️',
          updated_at: '2020-01-07T15:02:41Z',
          stargazers_count: 1,
          language: 'COBOL',
        },
        {
          id: 232349068,
          name: 'adonis-4',
          html_url: 'https://github.com/jcolscript/adonis-bull',
          description: 'The easiest way to start using an asynchronous job queue with AdonisJS ⚡️',
          updated_at: '2020-01-07T15:02:41Z',
          stargazers_count: 3,
          language: 'ACTION',
        },
      ],
    };
  },
  methods: {
    close() {
      return this.$router.push({ name: 'Find' });
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
