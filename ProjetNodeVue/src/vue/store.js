import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// Exportation du store / Création du store
export const store_movies = new Vuex.Store({
    state: {
        filmaajouter: {},
        filmaafficher: undefined,
        // Liste de films à ajouter dès le début à l'application
        movies: [
            {
                titre: "Braveheart",
                annee: 1995,
                langue: "FR / ENG",
                genre: "Historique, Aventure, Biopic, Guerre",
                realisateur: "Mel Gibson",
                resume: "Evocation de la vie tumultueuse de William Wallace, héros et symbole de l'indépendance écossaise, qui à la fin du XIIIe siècle affronta les troupes du roi d'Angleterre Edward I qui venaient d'envahir son pays.",
                note:undefined
            },
            {
                titre: "Le Garçon et la Bête",
                annee: 2016,
                langue: "FR / ENG / JPN",
                genre: " Animation, Aventure",
                realisateur: "Mamoru Hosoda",
                resume: "Shibuya, le monde des humains, et Jutengai, le monde des Bêtes... C'est l'histoire d'un garçon solitaire et d'une Bête seule, qui vivent chacun dans deux mondes séparés. Un jour, le garçon se perd dans le monde des Bêtes où il devient le disciple de la Bête Kumatetsu qui lui donne le nom de Kyuta. Cette rencontre fortuite est le début d'une aventure qui dépasse l'imaginaire...",
                note:undefined
            },
        ],
        search: undefined,
        disp_edit:false,
        cpt: 0,
    },
    mutations: {
        newMovie:state => {
            state.movies.push(state.filmaajouter);
            state.filmaajouter = {};
        },
        deleteMovie:state => {
            state.movies.splice(state.cpt, 1);
        },
    }
});
