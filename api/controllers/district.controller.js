//Requerimos el modelo  de distritos
var Canton = require('../models/district.model.js');

// Modelo que devuelve todos los distritos
module.exports.getAll = function(req, res){
  Canton.find().then(function(resp) {
    res.send(resp);
  }).catch(function(err){
    errorHandler(err);
  })
};
