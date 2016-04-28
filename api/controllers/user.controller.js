//Requerimos el modelo  de usuarios
var User = require('../models/user.model.js');
var jwt = require('jwt-simple');
var config = require('../config/database');
// Funcion que registra un usuario
module.exports.save = function(req,res){
  if(!req.body.email || !req.body.password){
    res.json({success:false,msg:'Ingrese email y contaseña'});
  }else{
    var newUser = new User({
      email:req.body.email,
      password:req.body.password
    });
    newUser.save(function(err){
      if(err){
        res.json({success:false,msg:'El email ya existe'});
      }else {
        res.json({success:true,msg:'Se creo con exito'});
      }
    });
  }
};

//Funcion que autentica un usuario
module.exports.authenticate = function(req,res){
  User.findOne({email:req.body.email},function(err,user){
    if(err) throw err;

    if(!user){
      return res.status(403).send({success:false,msg:'Error, email no encontrado.'});
    }else {
      user.comparePassword(req.body.password,function(err,isMatch){
        if(isMatch && !err){
          var token = jwt.encode(user,config.secret);
          res.json({success:true,token:'JWT ' + token});
        }else{
          return res.status(403).send({success:false,msg:'Error, contraseña incorrecta.'});
        }
      });
    }
  });
};
