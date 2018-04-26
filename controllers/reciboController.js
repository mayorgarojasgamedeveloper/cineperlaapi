var Recibo = require('../models/reciboModel');
var recibo = new Recibo();

exports.recibo_agregar = function(req, res) {
  return recibo.recibo_agregar(req.body.usuarioId,req.body.peliculaId,req.body.funcionId,req.body.boletos,req.body.total);
};

exports.recibo_lista = function(req, res) {
  return recibo.recibo_lista();
};

exports.recibo_informacion = function(req, res) {
  return recibo.recibo_informacion(req.params.reciboId);
};

exports.recibo_actualizar = function(req, res) {
  return recibo.recibo_actualizar(req.body.reciboId,req.body.usuarioId,req.body.peliculaId,req.body.funcionId,req.body.boletos,req.body.total);
};

exports.recibo_eliminar = function(req, res) {
  return recibo.recibo_eliminar(req.body.reciboId);
};
