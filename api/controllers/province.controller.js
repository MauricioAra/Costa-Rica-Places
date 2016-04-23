//Requerimos el modelo  de usuarios
var Province = require('../models/province.model.js');

// Modelo que devuelve todas las provincias
module.exports.getAll = function(req, res){
  Province.find().then(function(resp) {
    res.send(resp);
  }).catch(function(err){
    errorHandler(err);
  })
};
