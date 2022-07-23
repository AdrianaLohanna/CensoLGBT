require('dotenv-safe').config();
const express = require("express");
const app = express();
const cors = require('cors');
const db=require('./database/mongoConfig');

app.use(express.json());
app.use(cors());
app.get('/',( req, res) => 
    res.status(200).send({
        title: "Reprograma -> Censo LGBTQIAP+ - Projeto Final",
        version: "1.0.0",
        mensagem: "Olá gatinha, gatinho e gatinhe!!, aqui você encontra a primeira versão deste projeto, uma API focada em cadastro de pessoas LGBTQIAP+s."
}))
db.connect()
module.exports = app
