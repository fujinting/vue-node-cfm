import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import http from './network/http'

Vue.mixin({
  methods: {
    getAuthHeaders(){
      return{
        Authorization:`Bearer ${localStorage.token || ''}`
      }
    }
  },
})

Vue.config.productionTip = false

Vue.prototype.$http=http

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
