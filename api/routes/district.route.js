var express = require('express'),
		router = express.Router(),
    districtController = require('../controllers/district.controller.js');

//Para las rutas con id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});

//Declaracion de las rutas
router.route('/districts')
  .get(function(req, res){
    provinceController.getAll(req, res);
 	});

// Se exporta el modulo
module.exports = router;
