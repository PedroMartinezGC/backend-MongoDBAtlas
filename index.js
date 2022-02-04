'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://PeterPrust:78451289@clusterpmgc.womh1.mongodb.net/Portfolio?retryWrites=true&w=majority')
	.then(()=>{
		console.log("Conexión a la base de datos establecida con éxito...");

		// Creación del servidor
		app.listen(port, () =>{
			console.log("Servidor MongoDB Atlas corriendo correctamente en la url: localhost:3700");
			
		});
	})
	.catch(err => {console.log(err)});