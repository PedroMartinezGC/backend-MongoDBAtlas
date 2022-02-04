'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express(); //aqui ejecuto la función express

//cargar archivos de rutas
var project_routes = require('./routes/project');

//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Configurar cabeceras y cors (middlewares)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



//CORS

/*rutas --> Para cargar las rutas de project.js-routes, tengo que escribir antes /api 
(por ejemplo: localhost:3700/api/projects)*/

app.use('/api', project_routes);
app.get('/test', (req, res)=>{
	res.status(200).send({
		message: "hola a todos"
	});
});



//exportar
module.exports = app;

