const express = require("express")
const controller = require("../controller/administradorCensoController")
const routes = express.Router()

routes.post("/", controller.criar)
routes.post("/entrar", controller.entrar)
routes.get("/", controller.listar)
routes.patch("/", controller.atualizar)
routes.get("/", controller.buscar)
routes.delete("/",controller.deletar)

module.exports = routes
