const mongoose = require('mongoose'); //para modelado de datos
const { Schema } = mongoose; //una parte de la biblioteca, en este caso solo 'Schema'

//Se crea un esquema que incluye cada uno de los datos de las tareas
const Task = new Schema({
    title: String,
    description: String,
});

//se exporta             ('nombre model', esquema)
module.exports = mongoose.model('Task', Task);