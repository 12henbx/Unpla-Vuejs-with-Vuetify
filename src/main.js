import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store/index'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { WebCam } from 'vue-web-cam'
import axios from 'axios'

Vue.use(WebCam)

axios.defaults.withCredentials = true
axios.interceptors.response.use(undefined, function (error) {
  if (error) {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      store.dispatch('LogOut')
      return router.push('/login')
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
