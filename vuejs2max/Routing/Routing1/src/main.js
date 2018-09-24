import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history'  //default mode is hash, which puts # in url.  Must set server to always return index.html for every request to use history
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
