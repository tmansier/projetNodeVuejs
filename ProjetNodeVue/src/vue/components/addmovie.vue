<!--Template vue Ajouter film -->
<template>
    <p>Nouveau film<br/>
        <!-- Formulaire nouveau film -->
        <router-link to="/"><button>Retour Accueil</button></router-link>
        <input type="text" v-model="filmaajouter.titre" placeholder="Titre"/><br />
        <input type="text" v-model="filmaajouter.annee" placeholder="Année"/><br />
        <input type="text" v-model="filmaajouter.realisateur" placeholder="Realisateur"/><br />
        <input type="text" v-model="filmaajouter.genre" placeholder="Genre"/><br />
        <input type="text" v-model="filmaajouter.langue" placeholder="Langues"/><br />
        <textarea v-model="filmaajouter.resume" placeholder="Résumé"></textarea><br />
        <input type="number" v-model="filmaajouter.note" name="note" min="0" max="5">
        <router-link to="/"><button v-on:click="newMovie"> Ajouter film</button></router-link>
    </p>
</template>

<script>
// importer le store (store_movies) depuis store.js
import {store_movies} from '../store.js'
// Methodes et données de la page
export default {
  data(){
    return {
      store: store_movies
    }
  },
  computed: {
    movies(){
      return this.$store.state.movies
    },
    movie_to_add(){
      return this.$store.state.filmaajouter
    }
  },
  methods: {
    newMovie:function () {
        this.$store.commit('newMovie');
    }
  }
}

</script>
