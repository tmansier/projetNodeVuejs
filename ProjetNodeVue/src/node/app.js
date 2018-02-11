const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const App = express();

App.use(bodyParser.json());
App.use(bodyParser.urlencoded());
App.use('/dist/build.js', express.static('dist/build.js'))

// Pour la route principale afficher la page index.html et ajouter les données
App.route('/')
    .get(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('index.html', function (err, data) {
            res.end(data);
        })
    });
// Le serveur ecoute le port 3030 de localhost
App.listen(3030, () => console.log('Example app listening on port 3000!'));
