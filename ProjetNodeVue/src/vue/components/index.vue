<!--Template vue page accueil -->
<template>
    <div>
        <h2>Liste de films</h2>
        <!--Afficher la liste de films -->
        <ul>
            <li v-for="(movie, key) in movies" v-bind:key="movie.title" @click="setMovieToDisplay(movie, key)">
                <p>{{ movie.titre }} ({{ movie.realisateur }} - {{ movie.annee }})</p>
                <span v-if="movie_to_display === movie">
                  <!-- Lien pour ajouter un film -->
                  <router-link to="/movie/editdetails"><button>Voir détails film</button></router-link>
                  <button v-on:click="deleteMovie">Supprimer film</button><br/>
                </span>
            </li>
        </ul>
        <!--Afficher le nombre de films -->
        <b>Nombre de films : {{ movies.length }}</b>
        <!-- Lien pour ajouter un film -->
        <router-link to="/movie/add">
            <button>Ajouter film</button>
        </router-link>
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
            cpt() {
                return this.$store.state.cpt
            },
            movies() {
                return this.$store.state.movies
            },
            filmaafficher() {
                return this.$store.state.filmaafficher
            }
        },
        methods: {
            setMovieToDisplay: function (movie, key) {
                this.$store.state.filmaafficher = movie;
                this.$store.state.cpt = key;
            },
            deleteMovie: function () {
                this.$store.commit('deleteMovie')
            }
        }
    }

</script>
