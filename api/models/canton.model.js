//Requerimos mongoose
var mongoose = require('mongoose');

//Esquema de usuarios
var CantonSchema = new mongoose.Schema({
  idCanton: Number,
  nombre :String,
  Provincia_idProvincia: Number
});
module.exports = mongoose.model('Canton',CantonSchema);
