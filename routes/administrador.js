var express = require('express');
var controller = require('../Controllers/adminController.js');
var router = express.Router();

//Agregar un administrador
router.post('/', function(req, res, next) {
  var resp = controller.admin_agregar(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});
//Revisa si el admin existe y lo guarda en cookies
router.get('/existe', function(req, res, next) {
  var resp = controller.admin_existe(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});
//Descarga la info de todos los admin
router.get('/', function(req, res, next) {
  var resp = controller.admin_descargar(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});
//Actualizar la contrasena
router.put('/cont', function(req, res, next) {
  var resp = controller.admin_actualizar_cont(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});
//Borrar a un usuario de la base de datos
router.delete('/', function(req, res, next) {
  var resp = controller.admin_borrar(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});

module.exports = router;
