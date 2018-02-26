import VueRouter from 'vue-router'
import MovieAdd from './components/addmovie.vue'
import MovieHome from './components/index.vue'
import MovieDetails from './components/editdetails.vue'


// Définition des routes du programme
const routes = [
  { path: '/', component: Home },
  { path: '/movie/add', component: MovieAdd },
  { path: '/movie/editdetails', component: MovieDetails },

]
// Exporter les routes du programme
export default new VueRouter({
  routes
})
