import Vue from 'vue';
import VueRouter from 'vue-router';

import Find from '@/views/Find.vue';

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
    component: () => import(/* webpackChunkName: "about" */ '@/views/Dev.vue'),
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
