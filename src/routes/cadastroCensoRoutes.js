const express = require("express")
const controller = require("../controller/cadastroCensoController")
const routes = express.Router()
routes.get("/todosCadastros", controller.todosCadastros)
// app.get("/", (request, response) => {

// })
// app.get("/", (request, response) => {
//     response.status(200).json(["Salve, mundão"])
//   })

  module.exports = routes