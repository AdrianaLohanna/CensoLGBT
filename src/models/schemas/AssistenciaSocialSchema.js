const mongoose = require('mongoose');

exports.AssistenciaSocialSchema = new mongoose.Schema({
    atendimentoRedeSuas: String,
  atendimentoHumanizado: Boolean,
  respeitoOrientIdentidade: Boolean,
},{ timestamps: true });