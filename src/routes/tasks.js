const express = require('express');
const router = express.Router();

//se incluye el modelo en una constante
const Task = require('../models/Task');

//** CREATE **/

router.get('/', async (req, res) => {//sync y await almacenan los datos en la constante tasks una vez encuentra todos los datos de manera asincrona 
    //res.send('API Tasks goes here')
    //task.find();//busca todos los datos
    const tasks = await Task.find();//haz la consulta, luego almacena
    //console.log(tasks);//mensaje con el arreglo de datos
    res.json(tasks);//muestra los datos del arreglo en un json en el navegador para su manejo con vue
});

router.post('/', async (req, res) => { //request(req) toda la info del navegador al servidor
    const task = new Task(req.body);//propiedad de req
    await task.save();//guarda en la bd
    res.json({
        status: 'Task Saved'
    });
    //console.log(task);//imprime lo que recibió del post
    //console.log(req.body);//En body Se reciben los datos del cliente (prueba post)
    //res.json('received');//manda un mensaje de recibido al post
   
});

//** UPDATE **/

router.put('/:id', async(req, res) => {
   await Task.findByIdAndUpdate(req.params.id, req.body);
   //console.log(req.params); //req.params es el modelo del id
   res.json({
    status: 'Task Updated'
   });
   //res.json('received');
}); 

//** DELETE **/
router.delete('/:id', async (req, res) => {
   await Task.findByIdAndDelete(req.params.id);
    res.json({
        status: 'Task Deleted'
    });
});

//Export de la const router del require de arriba
//para usarlo en otros archivos
module.exports = router;