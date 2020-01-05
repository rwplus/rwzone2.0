import Vue from 'vue'
import Vuex from 'vuex'
import snackbar from './modules/Snackbar'
import auth from './modules/Auth'
import users from './modules/User'



Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    snackbar,
    auth,
    users
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
