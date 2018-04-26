var Usuario = require('../models/usuarioModel');
var usuario = new Usuario();

exports.usuario_agregar = function(req, res) {
  return usuario.usuario_agregar(req.body.nombre, req.body.apellido, req.body.usuario, req.body.correo, req.body.contrasena);
};

exports.usuario_existe = function(req, res) {
  return usuario.usuario_existe(req.query.usuario, req.query.contrasena);
};

exports.usuario_descargar = function(req, res) {
  return usuario.usuario_descargar(req.query.usuarioId);
};

exports.usuario_actualizar_info = function(req, res) {
  return usuario.usuario_actualizar_info(req.body.usuarioId, req.body.contrasena, req.body.nombre, req.body.apellido, req.body.correo);
};

exports.usuario_actualizar_cont = function(req, res) {
  return usuario.usuario_actualizar_cont(req.body.usuarioId, req.body.contrasena, req.body.nuevaContrasena);
};

exports.usuario_hacer_premium = function(req, res) {
  return usuario.usuario_hacer_premium(req.body.usuarioId, req.body.contrasena);
};

exports.usuario_borrar = function(req, res) {
  return usuario.usuario_borrar(req.body.usuarioId, req.body.contrasena);
};
