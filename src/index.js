const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
//aqui se crea la bd
mongoose.connect('mongodb://localhost/mevn-database')
    //Envía un mensaje comprobando la conexión de la bd
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

//Settings
//Puerto del servidor
app.set('port', process.env.PORT || 8080);

//Middlewares
//morgan envía mensajes de solicitudes http que se realizan en la pagina a consola
//ejemplo: GET / 200 9.590 ms - 278
// una solicitud 200 a 9.590 milisegundos al recargar la pagina
app.use(morgan('dev'));
//Permite que el seridor entienda formatos json y los convierte en objetos para su manejo, como en bds
app.use(express.json());

//Routes
app.use('/tasks', require('./routes/tasks'));

//Static files
app.use(express.static(__dirname + '/public'));

// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});