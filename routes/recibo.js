var express = require('express');
var controller = require('../Controllers/reciboController.js');
var router = express.Router();

//Genera un recibo
router.post('/', function(req, res, next) {
  var resp = controller.recibo_agregar(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});
//Descarga todos los recibos
router.get('/', function(req, res, next) {
  var resp = controller.recibo_lista(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});
//Descarga un recibo
router.get('/:reciboId', function(req, res, next) {
  var resp = controller.recibo_informacion(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});
//Actualiza un recibo
router.put('/', function(req, res, next) {
  var resp = controller.recibo_actualizar(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});
//Borra un recibo
router.delete('/', function(req, res, next) {
  var resp = controller.recibo_eliminar(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});

module.exports = router;
