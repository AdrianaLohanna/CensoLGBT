const { hashSync, compareSync } = require('bcrypt')
const mongoose = require('mongoose')

const administradorSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true,
        set: (senha) => {
            return hashSync(senha, 10)
        }
    },
})

const model = mongoose.model('administrador_censo', administradorSchema)

module.exports = class extends model {
    validarSenha(outraSenha) {
        return compareSync(outraSenha, this.senha)
    }
}
