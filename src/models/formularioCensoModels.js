const mongoose = require('mongoose');
const { AvaliacaoSchema } = require('./schemas/AvaliacaoSchema');
const { AssistenciaSocialSchema } = require('./schemas/AssistenciaSocialSchema');
const { DeficienciaSchema } = require('./schemas/DeficienciaSchema');
const { EducacaoSchema } = require('./schemas/EducacaoSchema');
const { HabitacaoSchema } = require('./schemas/HabitacaoSchema');
const { SaudeSchema } = require('./schemas/SaudeSchema');
const { SegurancaPublicaSchema } = require('./schemas/SegurancaPublicaSchema');
const { TrabalhoERendaSchema } = require('./schemas/TrabalhoeRendaSchema');
const { IdentificacaoPessoalSchema } = require('./schemas/IdentificacaoPessoalSchema');

const formularioSchema = new mongoose.Schema({
coletadoPor: String,
ano: String,
    "identificacaoPessoal": {
        type: IdentificacaoPessoalSchema,
        required: true
    },
   
    "dimensaoHabitacao":{
       type: HabitacaoSchema,
       required: true
    },
    "dimensaoDeficiencia":{
        type: DeficienciaSchema,
        required: true
    },
    "dimensaoEducacao":{
        type: EducacaoSchema,
        required: true
    },
    "dimensaoTrabalhoeRenda": {
        type: TrabalhoERendaSchema,
        required: true
    },
    "dimensaoSaude":{
        type: SaudeSchema,
        required: true
    },
    "dimensaoAssistenciaSocial": {
        type: AssistenciaSocialSchema,
        required: true
    },
    "dimensaoSegurancaPublica": {
        type: SegurancaPublicaSchema,
        required: true
    },
    "avaliação": {
        type: AvaliacaoSchema,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('formulario_LGBTQIAP+',formularioSchema)
