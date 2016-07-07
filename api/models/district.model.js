//Requerimos mongoose
var mongoose = require('mongoose');

//Esquema de usuarios
var DistrictSchema = new mongoose.Schema({
  idCanton: Number,
  nombre :String,
  Canton_idCanton: Number
});
module.exports = mongoose.model('District',DistrictSchema);
