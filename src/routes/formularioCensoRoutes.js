const express = require("express")
const controller = require("../controller/formularioCensoController")
const routes = express.Router()

routes.post("/", controller.criar)
routes.get("/", controller.listar)
routes.patch("/", controller.atualizar)
routes.get("/", controller.buscar)
routes.delete("/",controller.deletar)

module.exports = routes
