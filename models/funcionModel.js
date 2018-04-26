var md5 = require('md5');
var db = require('../assets/database.js');

module.exports = class Usuario {
  funcion_agregar(peliculaId,dia,hora) {
    return db.INSERT(`funcion`, `peliculaId,dia,hora`, `\'${peliculaId}\',\'${dia}\',\'${hora}\'`, `funcionId`);
  }
  funcion_lista(peliculaId) {
    return db.SELECT(`funcion`, `funcionId,peliculaId,dia,hora,asientos`, `peliculaId=\'${peliculaId}\'`);
  }
  funcion_actualizar(funcionId,peliculaId,dia,hora) {
    return db.UPDATE(`funcion`, `peliculaId=\'${peliculaId}\',dia=\'${dia}\',hora=\'${hora}\'`, `funcionId=\'${funcionId}\'`);
  }
  funcion_asientos(funcionId,numero) {
    return db.UPDATE(`funcion`, `asientos=asientos+${numero}`, `funcionId=\'${funcionId}\'`);
  }
  funcion_eliminar(funcionId) {
    return db.DELETE(`funcion`, `funcionId=\'${funcionId}\'`);
  }
};
