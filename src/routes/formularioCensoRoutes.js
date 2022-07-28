const express = require("express")
const controller = require("../controller/formularioCensoController")
const routes = express.Router()

routes.post("/", controller.criar)
routes.get("/", controller.listar)
routes.patch("/:id", controller.atualizar)
routes.get("/:id", controller.buscar)
routes.delete("/:id",controller.deletar)

module.exports = routes
