import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入全局样式表
import '../src/assets/css/reset.css';

import './plugins/iview.js'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
