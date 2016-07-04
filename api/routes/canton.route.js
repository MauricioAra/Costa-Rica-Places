var express = require('express'),
		router = express.Router(),
    cantonController = require('../controllers/canton.controller.js');

//Para las rutas con id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});

//Declaracion de las rutas
router.route('/cantons')
  .get(function(req, res){
    cantonController.getAll(req, res);
 	});

// Se exporta el modulo
module.exports = router;
