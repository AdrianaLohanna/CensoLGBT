const express = require("express")
const controller = require("../controller/administradorCensoController")
const { protegido } = require("../middlewares/auth")
const routes = express.Router()

routes.post("/", protegido, controller.criar)
routes.post("/entrar", controller.entrar)
routes.get("/", protegido, controller.listar)
routes.patch("/:id", protegido, controller.atualizar)
routes.get("/", protegido, controller.buscar)
routes.get("/:id",protegido,controller.buscar)
routes.delete("/:id",protegido, controller.deletar)

module.exports = routes
