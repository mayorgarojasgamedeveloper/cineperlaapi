var Recibo = require('../models/logModel');
var recibo = new Recibo();

exports.log_lista = function(req, res) {
  return recibo.log_lista();
};
