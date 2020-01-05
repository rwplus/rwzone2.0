import Vue from 'vue'
// Application imports
import './components'
// Routes imports
import router from '@/router'
// vuex imports
import store from '@/store'
//plugins import
import './plugins'
//main app import
import App from './App'
//router+vuex sync import
import { sync } from 'vuex-router-sync'
import vuetify from './plugins/vuetify.js'
sync(store, router)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
