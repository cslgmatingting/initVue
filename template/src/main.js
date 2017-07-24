require('es6-promise').polyfill();
require('isomorphic-fetch');

//$script([`http://webapi.amap.com/maps?v=1.3&key=${key}`],'mapScript');

import 'lib-flexible'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store/index.js'
import routes from './config/router-config'
import FastClick from 'fastclick'
import scriptjs from 'scriptjs'
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes
});

//有问题先注释掉了
// router.beforeEach((to, from, next) => {
//   //页面跳转回到顶部
//   window.scrollTo(0,0);
//   next();
// })
new Vue({
  el: '#applicaton',
  store,
  router,
  render: h => h(App)
})
