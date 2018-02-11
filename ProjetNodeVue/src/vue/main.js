import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import app from './app.vue'
import router from './routes.js'
import {store_movies} from './store.js'

Vue.use(Vuex)
Vue.use(VueRouter)

// On associe le store, les vues et les routes et on affiche le résultat dans la div app de index.html
new Vue({
  el: '#app',
  store: store_movies,
  router,
  render: h => h(app)
})
