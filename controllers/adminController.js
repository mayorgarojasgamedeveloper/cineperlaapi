var Usuario = require('../models/adminModel');
var usuario = new Usuario();

exports.admin_agregar = function(req, res) {
  return usuario.admin_agregar(req.body.nombre, req.body.apellido, req.body.usuario, req.body.correo, req.body.contrasena);
};

exports.admin_existe = function(req, res) {
  return usuario.admin_existe(req.query.usuario, req.query.contrasena);
};

exports.admin_descargar = function(req, res) {
  return usuario.admin_descargar(req.query.adminId);
};

exports.admin_actualizar_cont = function(req, res) {
  return usuario.admin_actualizar_cont(req.body.adminId, req.body.contrasena, req.body.nuevaContrasena);
};

exports.admin_borrar = function(req, res) {
  return usuario.admin_borrar(req.body.adminId, req.body.contrasena);
};
