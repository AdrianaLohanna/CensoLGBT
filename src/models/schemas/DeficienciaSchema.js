const mongoose = require('mongoose');

exports.DeficienciaSchema = new mongoose.Schema({
  possui: Boolean,
  descricao: String
},{ timestamps: true });

 
