const mongoose = require('mongoose');

exports.EducacaoSchema = new mongoose.Schema({
    escolaridade: String,
    lgbtfobiaNaEscola: Boolean,
    descricao: String
},{ timestamps: true });
