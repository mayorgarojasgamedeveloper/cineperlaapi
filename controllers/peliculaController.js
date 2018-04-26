var Pelicula = require('../models/peliculaModel');
var pelicula = new Pelicula();

exports.pelicula_agregar = function(req, res) {
  return pelicula.pelicula_agregar(req.body.nombre,req.body.sinopsis,req.body.categoria,req.body.duracion,req.body.restriccion,req.body.director,req.body.actores,req.body.portada);
};

exports.pelicula_lista = function(req, res) {
  return pelicula.pelicula_lista();
};

exports.pelicula_vista = function(req, res) {
  return pelicula.pelicula_vista(req.params.peliculaId);
};

exports.pelicula_actualizar = function(req, res) {
  return pelicula.pelicula_actualizar(req.body.peliculaId,req.body.nombre,req.body.sinopsis,req.body.categoria,req.body.duracion,req.body.restriccion,req.body.director,req.body.actores,req.body.portada);
};

exports.pelicula_eliminar = function(req, res) {
  return pelicula.pelicula_eliminar(req.body.peliculaId);
};
