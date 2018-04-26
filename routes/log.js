var express = require('express');
var controller = require('../Controllers/logController.js');
var router = express.Router();

//Regresa todos los logs del sistema
router.get('/', function(req, res, next) {
  var resp = controller.log_lista(req, res);
  resp.then(result => res.json(result.rows)).catch(e => res.json(e));
});

module.exports = router;
