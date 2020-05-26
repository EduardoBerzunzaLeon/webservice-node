
const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers'); //Debido a que las funciones se registran en el hbs 
//No es requerido hacer una constante que guarde el valor de require
//Ni hacer un module.exports en hbs/helpers

const port = process.env.PORT || 3000;

//Todo lo que este adentro de la carpeta declrada sera de uso publico
app.use( express.static( __dirname + '/public' )); //Crea un middleware
 
// Express HBS engine
hbs.registerPartials( __dirname + '/views/partials')
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
	res.render('home', {
		nombre: 'Eduardo'
	});
});

app.get('/about', (req, res) => {
	res.render('about');
});

 
app.listen(port, () => {
	console.log(`Escuchando peticiones en el puerto ${port}`);
});