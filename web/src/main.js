import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from './network/http'




import './assets/scss/style.scss'

Vue.config.productionTip = false

Vue.prototype.$http=http



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
