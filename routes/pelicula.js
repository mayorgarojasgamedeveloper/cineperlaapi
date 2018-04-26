var express = require('express');
var controller = require('../Controllers/peliculaController.js');
var router = express.Router();

//Agregar un pelicula
router.post('/', function(req, res, next) {
  var resp = controller.pelicula_agregar(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});
//Lista de todas las peliculas
router.get('/', function(req, res, next) {
  var resp = controller.pelicula_lista(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});
//info pelicula personalizada
router.get('/:peliculaId', function(req, res, next) {
  var resp = controller.pelicula_vista(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});
//Actualizar pelicula
router.put('/', function(req, res, next) {
  var resp = controller.pelicula_actualizar(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});
//Eliminar pelicula
router.delete('/', function(req, res, next) {
  var resp = controller.pelicula_eliminar(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});

module.exports = router;
