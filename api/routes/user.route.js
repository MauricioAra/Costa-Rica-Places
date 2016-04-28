var express = require('express');
var	router = express.Router();
var userController = require('../controllers/user.controller.js');

//Para las rutas con id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});

//Declaracion de las rutas
router.route('/signup')
  .post(function(req, res){
    userController.save(req,res);
 	});

router.route('/authenticate')
  .post(function(req, res){
    userController.authenticate(req,res);
 	});

// Se exporta el modulo
module.exports = router;
