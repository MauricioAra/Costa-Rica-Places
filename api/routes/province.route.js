var express = require('express'),
		router = express.Router(),
    provinceController = require('../controllers/province.controller.js');

//Para las rutas con id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});

//Declaracion de las rutas
router.route('/provinces')
  .get(function(req, res){
    provinceController.getAll(req, res);
 	});

// Se exporta el modulo
module.exports = router;
