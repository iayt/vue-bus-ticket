import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import storeOptions from './stores';
import routerOptions from './routers/router';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter(routerOptions);
const store = new Vuex.Store(storeOptions);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
})
