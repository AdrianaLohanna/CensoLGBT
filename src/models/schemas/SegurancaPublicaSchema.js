const mongoose = require('mongoose');

exports.SegurancaPublicaSchema = new mongoose.Schema({
  sofreuLgbtfobia: Boolean,
  descricao: String,
  localDoFato: String,
  procurouDelegacia: Boolean,
  motivo: String,
  profissionaisPreparados:  String,
  sentimentoLgbtfobia:  String,
  segurançaemMorar:  String
},{ timestamps: true });

