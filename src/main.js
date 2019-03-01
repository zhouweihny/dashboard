// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import zutil from './util/util'
import moment from 'moment'

Vue.config.productionTip = false

Vue.prototype.zutil = zutil;
Vue.prototype.moment = moment;

Vue.filter('time', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD HH:mm';
  return moment(value).format(formatString);
})

Vue.filter('formatNum', function (value, type) {
  return (value+ '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
})