'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar rutas

var user_routes = require('./routes/user');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//Rutas base

app.use('/api', user_routes);


//Configurar cabeceras

/*app.get('/pruebas', function(req, res){
	res.status(200).send({message: 'iron marck API res'});
});*/

//rutas base

module.exports = app;
