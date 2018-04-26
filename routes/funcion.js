var express = require('express');
var controller = require('../Controllers/funcionController.js');
var router = express.Router();

//Crea una nueva funcion
router.post('/', function(req, res, next) {
  var resp = controller.funcion_agregar(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});
//Descarga la función
router.get('/:peliculaId', function(req, res, next) {
  var resp = controller.funcion_lista(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});
//Actualiza una funcion
router.put('/', function(req, res, next) {
  var resp = controller.funcion_actualizar(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});
//suma los asientos
router.put('/asientos', function(req, res, next) {
  var resp = controller.funcion_asientos(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});
//Borra una funcion
router.delete('/', function(req, res, next) {
  var resp = controller.funcion_eliminar(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});

module.exports = router;
