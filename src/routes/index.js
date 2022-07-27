const express = require("express")
const routes = express.Router()

routes.get('/', (req, res) =>
    res.status(200).send({
        title: "Reprograma -> Censo LGBTQIAP+ - Projeto Final",
        version: "1.0.0",
        mensagem: "Olá gatinha, gatinho e gatinhe!!, aqui você encontra a primeira versão deste projeto, uma API focada em cadastro de pessoas LGBTQIAP+s."
    }))

module.exports = routes