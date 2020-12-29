import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { WebCam } from 'vue-web-cam'
import 'firebase/storage';

Vue.use(WebCam)

var firebaseConfig = {
  apiKey: 'AIzaSyDdklG9dc70Gauqo59lBWBv4aLOGx8Mq5I',
  authDomain: 'unpla-b1308.firebaseapp.com',
  databaseURL: 'https://unpla-b1308.firebaseio.com',
  projectId: 'unpla-b1308',
  storageBucket: 'unpla-b1308.appspot.com',
  messagingSenderId: '1033893574191',
  appId: '1:1033893574191:web:caade5c1bf488584d2f8da',
  measurementId: 'G-5S03L5JXQH'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

var storage = firebase.storage()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
