const express = require("express")
const controller = require("../controller/formularioCensoController")
const { protegido } = require("../middlewares/auth")
const routes = express.Router()

routes.post("/", controller.criar)
routes.get("/",protegido, controller.listar)
routes.patch("/:id",protegido, controller.atualizar)
routes.get("/:id",protegido, controller.buscar)
routes.delete("/:id",protegido,controller.deletar)

module.exports = routes
