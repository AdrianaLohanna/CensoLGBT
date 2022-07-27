const mongoose = require('mongoose');

exports.TrabalhoERendaSchema = new mongoose.Schema({
  estaTrabalhando: Boolean ,
  areaDeAtuacao: String,
  tipodeEmprego: String ,
  buscandoEmprego:String ,
  rendaMensal:String ,
  desafiosTrabalho:String ,
  acaoEmpregabilidade: String 

},{ timestamps: true });


