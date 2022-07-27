const mongoose = require('mongoose');

exports.SaudeSchema = new mongoose.Schema({
  acessoMetodosPrevencao: String,
  preparacaoProfissionais: String,
  servicoEspecifico: String,
  respeitoOrientIdentidade: Boolean,
  lgbtfobiaNaSaude: Boolean

},{ timestamps: true });


 

 