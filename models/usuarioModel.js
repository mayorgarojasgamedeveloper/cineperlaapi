var md5 = require('md5');
var db = require('../assets/database.js');

module.exports = class Usuario {
  usuario_agregar(nombre, apellido, usuario, correo, contrasena) {
    return db.INSERT(`usuario`, `nombre, apellido, usuario, correo, contrasena`, `\'${nombre}\', \'${apellido}\', \'${usuario}\', \'${correo}\', \'${contrasena}\'`, `usuarioId`);
  }
  usuario_existe(usuario, contrasena) {
    return db.SELECT(`usuario`, `usuarioId, usuario, contrasena`, `usuario=\'${usuario}\' AND contrasena=\'${contrasena}\'`);
  }
  usuario_descargar(usuarioId) {
    return db.SELECT(`usuario`, `usuarioId, nombre, apellido, correo, premium, cartera, usuario`, `usuarioId=\'${usuarioId}\'`);
  }
  usuario_actualizar_info(usuarioId, contrasena, nombre, apellido, correo) {
    return db.UPDATE(`usuario`, `nombre=\'${nombre}\', apellido=\'${apellido}\', correo=\'${correo}\'`, `usuarioId=\'${usuarioId}\' AND contrasena=\'${contrasena}\'`);
  }
  usuario_actualizar_cont(usuarioId, contrasena, nuevaContrasena) {
    return db.UPDATE(`usuario`, `contrasena=\'${nuevaContrasena}\'`, `usuarioId=\'${usuarioId}\' AND contrasena=\'${contrasena}\'`);
  }
  usuario_hacer_premium(usuarioId, contrasena) {
    return db.UPDATE(`usuario`, `premium=true`, `usuarioId=\'${usuarioId}\' AND contrasena=\'${contrasena}\'`);
  }
  usuario_borrar(usuarioId, contrasena) {
    return db.DELETE(`usuario`, `usuarioId=\'${usuarioId}\' AND contrasena=\'${contrasena}\'`);
  }
};
