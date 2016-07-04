//Requerimos mongoose
var mongoose = require('mongoose');

//Esquema de usuarios
var ProvinceSchema = new mongoose.Schema({
  idProvincia: Number,
  nombre :String
});
module.exports = mongoose.model('Province', ProvinceSchema);
