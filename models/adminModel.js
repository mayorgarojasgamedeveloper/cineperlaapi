var md5 = require('md5');
var db = require('../assets/database.js');

module.exports = class Usuario {
  admin_agregar(nombre, apellido, usuario, correo, contrasena) {
    return db.INSERT(`admin`, `nombre, apellido, usuario, correo, contrasena`, `\'${nombre}\', \'${apellido}\', \'${usuario}\', \'${correo}\', \'${md5(contrasena)}\'`, `adminId`);
  }
  admin_existe(usuario, contrasena) {
    return db.SELECT(`admin`, `adminId, usuario, contrasena`, `usuario=\'${usuario}\' AND contrasena=\'${md5(contrasena)}\'`);
  }
  admin_descargar() {
    return db.SELECT(`admin`, `adminId, nombre, apellido, correo, usuario`);
  }
  admin_actualizar_cont(adminId, contrasena, nuevaContrasena) {
    return db.UPDATE(`admin`, `contrasena=\'${nuevaContrasena}\'`, `adminId=\'${adminId}\' AND contrasena=\'${md5(contrasena)}\'`);
  }
  admin_borrar(adminId, contrasena) {
    return db.DELETE(`admin`, `adminId=\'${adminId}\'`);
  }
};
