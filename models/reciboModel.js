var md5 = require('md5');
var db = require('../assets/database.js');

module.exports = class Usuario {
  recibo_agregar(usuarioId,peliculaId,funcionId,boletos,total) {
    return db.INSERT(`recibo`, `usuarioId,peliculaId,funcionId,boletos,total`, `\'${usuarioId}\', \'${peliculaId}\', \'${funcionId}\', \'${boletos}\', \'${total}\'`, `reciboId`);
  }
  recibo_lista() {
    return db.SELECT(`recibo`, `reciboId,usuarioId,peliculaId,funcionId,boletos,total`);
  }
  recibo_informacion(reciboId) {
    return db.SELECT(`recibo`, `usuarioId,peliculaId,funcionId,boletos,total`, `reciboId=\'${reciboId}\'`);
  }
  recibo_actualizar(reciboId,usuarioId,peliculaId,funcionId,boletos,total) {
    return db.UPDATE(`recibo`, `usuarioId=\'${usuarioId}\', peliculaId=\'${peliculaId}\', funcionId=\'${funcionId}\', boletos=\'${boletos}\', total=\'${total}\'`, `reciboId=\'${reciboId}\'`);
  }
  recibo_eliminar(reciboId) {
    return db.DELETE(`recibo`, `reciboId=\'${reciboId}\'`);
  }
};
