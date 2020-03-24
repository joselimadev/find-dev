import Vue from 'vue';
import VueRouter from 'vue-router';

import Find from '../views/Find.vue';
import Dev from '../views/Dev.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/find',
  },
  {
    path: '/find',
    name: 'Find',
    component: Find,
  },
  {
    path: '/find/:username',
    name: 'Dev',
    component: Dev,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
