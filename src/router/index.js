import Vue from 'vue';
import VueRouter from 'vue-router';

import Find from '../views/Find.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/find',
  },
  {
    path: '/find',
    component: Find,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
