const mongoose = require('mongoose');

exports.IdentificacaoPessoalSchema = new mongoose.Schema({
  termosDeUso: Boolean,
  nomeCivil: String,
  nomeSocial: String,
  estadoCivil: String,
  nacionalidade: String,
  orientacaoSexual: String,
  identidadeDeGenero: String,
  documentosPessoais: String,
  faixaEtaria: String,
  email: String,
  telefone: String
},{ timestamp: true });

  