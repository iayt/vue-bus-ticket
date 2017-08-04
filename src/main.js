import Vue from 'vue';
import VueRouter from 'vue-router';

import routerOptions from './routers/router';

import App from './App.vue';

Vue.use(VueRouter);

const router = new VueRouter(routerOptions)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
