//Requerimos el modelo  de cantones
var Canton = require('../models/canton.model.js');

// Modelo que devuelve todos los cantones
module.exports.getAll = function(req, res){
  Canton.find().then(function(resp) {
    res.send(resp);
  }).catch(function(err){
    errorHandler(err);
  })
};
