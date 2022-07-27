const mongoose = require('mongoose');

exports.HabitacaoSchema = new mongoose.Schema({
  regiao: String,
  endereco: String,
  municipio: String,
  zona: String,
  tipoDeResidencia: String 
},{ timestamps: true });