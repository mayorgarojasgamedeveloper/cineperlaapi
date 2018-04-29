var Pelicula = require('../models/funcionModel');
var pelicula = new Pelicula();

exports.funcion_agregar = function(req, res) {
  return pelicula.funcion_agregar(req.body.peliculaId,req.body.dia,req.body.hora);
};

exports.funcion_lista = function(req, res) {
  return pelicula.funcion_lista(req.params.peliculaId);
};

exports.funcion_actualizar = function(req, res) {
  return pelicula.funcion_actualizar(req.body.funcionId,req.body.peliculaId,req.body.dia,req.body.hora);
};

exports.funcion_asientos = function(req, res) {
  return pelicula.funcion_asientos(req.body.funcionId, req.body.numero);
};

exports.funcion_eliminar = function(req, res) {
  return pelicula.funcion_eliminar(req.body.funcionId);
};

exports.funcion_eliminar_pelicula = function(req, res) {
  return pelicula.funcion_eliminar(req.body.peliculaId);
};
