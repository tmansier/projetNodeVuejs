<!--Template vue Détail et Edition -->
<template>
    <div>
        <router-link to="/"><button>Accueil</button></router-link>
        <ul>
          <!--Détails du film -->
            <li v-bind:key="movie_to_display.title">
                <h3>{{ movie_to_display.titre }} ({{ movie_to_display.realisateur }} - {{ movie_to_display.annee }})</h3>
                <b>Genre : </b>{{ movie_to_display.genre }} ({{ movie_to_display.langue }}) {{ movie_to_display.note }}<br/><br/>
                {{ movie_to_display.resume }}<br/><br/>
            </li>
        </ul><br><br>

        <!--Outil d'édition -->
        <button v-on:click="toogle_disp_edit">Toogle edit</button>
        <span v-if="disp_edit">
            <p>Edit film<br/>
                <input type="text" v-model="filmaafficher.titre" placeholder="Titre"/><br/>
                <input type="text" v-model="filmaafficher.annee" placeholder="Année"/><br/>
                <input type="text" v-model="filmaafficher.realisateur" placeholder="Realisateur"/><br/>
                <input type="text" v-model="filmaafficher.genre" placeholder="Genre"/><br/>
                <input type="text" v-model="filmaafficher.langue" placeholder="Langues"/><br/>
                <textarea v-model="filmaafficher.resume" placeholder="Résumé"></textarea><br/>
                <input type="number" v-model="filmaafficher.note" name="note" min="0" max="5">
            </p>
            <button v-on:click="editMovie">Editer</button>
        </span>
    </div>
</template>

<script>
// importer le store (store_movies) depuis store.js
import {store_movies} from '../store.js'
// Methodes et données de la page
  export default {
      data() {
          return {
              store: store_movies
          }
      },
      computed: {
          movies() {
              return this.$store.state.movies
          },
          movie_to_display() {
              return this.$store.state.filmaafficher
          },
          disp_edit() {
              return this.$store.state.disp_edit
          }
      },
      methods: {
          editMovie: function () {
              this.$store.state.movies.splice(this.$store.state.cpt, 1);
              this.$store.state.movies.push(this.$store.state.filmaafficher);
          },
          toogle_disp_edit:function () {
              this.$store.state.disp_edit = !this.$store.state.disp_edit;
          }
      }
  }

</script>
