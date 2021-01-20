// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import filters from './plugins/filters'
import Vuex from 'vuex'
import store from './store/store'
import axios from 'axios'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Object.defineProperty(Vue.prototype, '$axios', {value: axios})
Vue.use(filters)
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(transition => {
  NProgress.done()
})
Vue.use(Vuex)
Vue.use(Antd)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
