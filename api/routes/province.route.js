var express = require('express');
var router = express.Router();
var provinceController = require('../controllers/province.controller.js');;
var passport = require('passport');
var config = require('../config/tokenFunctions');
//Para las rutas con id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});

//Declaracion de las rutas
router.get('/provinces',passport.authenticate('jwt',{session:false}),function(req, res){
	var token = config.getToken(req.headers);
	if(token){
		provinceController.getAll(req, res);
	}else {
		return res.status(403).send({success:false,msg:'Error, No token provided.'})
	}
});

// Se exporta el modulo
module.exports = router;
