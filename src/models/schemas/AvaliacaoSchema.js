const mongoose = require('mongoose');

exports.AvaliacaoSchema = new mongoose.Schema({
  importanciaCenso: String,
  sugestaoReclamacaoDenuncia: String,
  receberResultado: Boolean,
  contato: String,
  
},{ timestamps: true });