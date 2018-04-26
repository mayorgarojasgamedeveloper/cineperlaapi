var express = require('express');
var controller = require('../Controllers/usuarioController.js');
var router = express.Router();

// Agregar un usuario
router.post('/', function(req, res, next) {
  var resp = controller.usuario_agregar(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});
//Revis si el usuario existe y lo guarda en cookies
router.get('/existe', function(req, res, next) {
  var resp = controller.usuario_existe(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});
//Descarga la info de un usuario
router.get('/', function(req, res, next) {
  var resp = controller.usuario_descargar(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});
//Actualizar la información
router.put('/info', function(req, res, next) {
  var resp = controller.usuario_actualizar_info(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});
//Actualizar la contrasena
router.put('/cont', function(req, res, next) {
  var resp = controller.usuario_actualizar_cont(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});
//Hacer a un usuario Premium
router.put('/prem', function(req, res, next) {
  var resp = controller.usuario_hacer_premium(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});
//Borrar a un usuario de la base de datos
router.delete('/', function(req, res, next) {
  var resp = controller.usuario_borrar(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});

module.exports = router;
