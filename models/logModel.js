var md5 = require('md5');
var db = require('../assets/database.js');

module.exports = class Usuario {
  log_lista() {
    return db.SELECT(`log`, `dia, info, pelicula`);
  }
};
