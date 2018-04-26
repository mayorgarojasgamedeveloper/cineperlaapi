var md5 = require('md5');
var db = require('../assets/database.js');

module.exports = class Usuario {
  pelicula_agregar(nombre,sinopsis,categoria,duracion,restriccion,director,actores,portada) {
    return db.INSERT(`pelicula`, `nombre,sinopsis,categoria,duracion,restriccion,director,actores,portada`, `\'${nombre}\',\'${sinopsis}\',\'${categoria}\',\'${duracion}\',\'${restriccion}\',\'${director}\',\'${actores}\',\'${portada}\'`, `peliculaId`);
  }
  pelicula_lista() {
    return db.SELECT(`pelicula`, `peliculaId,nombre,sinopsis,categoria,restriccion,portada`);
  }
  pelicula_vista(peliculaId) {
    return db.SELECT(`pelicula`, `peliculaId,nombre,sinopsis,categoria,duracion,restriccion,director,actores,portada`, `peliculaId=\'${peliculaId}\'`);
  }
  pelicula_actualizar(peliculaId,nombre,sinopsis,categoria,duracion,restriccion,director,actores,portada) {
    return db.UPDATE(`pelicula`, `nombre=\'${nombre}\',sinopsis=\'${sinopsis}\',categoria=\'${categoria}\',duracion=${duracion},restriccion=\'${restriccion}\',director=\'${director}\',actores=\'${actores}\',portada=\'${portada}\'`, `peliculaId=\'${peliculaId}\'`);
  }
  pelicula_eliminar(peliculaId) {
    return db.DELETE(`pelicula`, `peliculaId=\'${peliculaId}\'`);
  }
};
