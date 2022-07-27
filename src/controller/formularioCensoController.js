const FormularioModel = require("../models/formularioCensoModels");

exports.criar = async (req, res) => {
  try {
    const novoFormulario = new FormularioModel(req.body);
    const formularioSalvo = await novoFormulario.save();
    return res.status(201).send(formularioSalvo)
  } catch (error) {
    return res.status(500).send({
      message: error.message
    })
  }
}

exports.listar = async (req, res) => {
  try {
    const todosFormularios = await formularioCensoModels.find(req.query)
    res.status(200).send(todosFormularios)
  } catch (error) {
    return res.status(500).send({
      message: error.message
    })
  }
}

exports.atualizar = async (req, res) => {
  try {
    const atualizarFormulario = await formularioCensoModels.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).send(atualizarFormulario)
  } catch (error) {
    return res.status(500).send({
      message: error.message
    })
  }
}
exports.buscar= async (req, res) => {
  try {
    const buscarFormulario = await formularioCensoModels.findById(req.params.id)
    res.status(200).send(buscarFormulario)
  } catch (error) {
    return res.status(500).send({
      message: error.message
    })
  }
}

exports.deletar = async (req,res) => {
  try {
     const deletarFormulario = await formularioCensoModels.findByIdAndDelete(req.params.id)
      res.status(200).send(deletarFormulario)
    }   catch (error) {
    return res.status(500).send({
      message: error.message
    })
  }
}
  
  
  







// const createCadastro = async (request, response) => {
//     const hashedPassword = bcrypt.hashSync(request.body.password, 10)
//     request.body.password = hashedPassword

//     try {
//         const newUser = new UserSchema(request.body)
//         const savedUser = await newUser.save()

//         response.status(201).send({
//             "message": "Usuário criado com sucesso!!",
//             savedUser
//         })
//     } catch (err) {
//         console.error(err)
//         response.status(500).json({
//             message: err.message
//         })

//     }
// }
// {
//     const hashedPassword = bcrypt.hashSync(request.body.password, 10)
// }
// const todosCadastros = (request, response) => {
//     response.status(200).json ({
//         "mensagem": "Esses são os cadastros presente en nosso censo:",
//         cadastro
//     })
// }
