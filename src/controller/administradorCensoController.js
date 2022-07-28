const jwt = require("jsonwebtoken")
const AdministradorCensoModel = require("../models/administradorCensoModel");

exports.criar = async (req, res) => {
  try {
    const novoAdministrador = new AdministradorCensoModel(req.body);
    const administradorSalvo = await novoAdministrador.save();
    return res.status(201).send(administradorSalvo)
  } catch (error) {
    return res.status(500).send({
      message: error.message
    })
  }
}

exports.listar = async (req, res) => {
  try {
    const todosAdministradores = await AdministradorCensoModel.find(req.query)
    res.status(200).send(todosAdministradores)
  } catch (error) {
    return res.status(500).send({
      message: error.message
    })
  }
}

exports.atualizar = async (req, res) => {
  try {
    const atualizarAdministrador = await AdministradorCensoModel.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).send(atualizarAdministrador)
  } catch (error) {
    return res.status(500).send({
      message: error.message
    })
  }
}
exports.buscar= async (req, res) => {
  try {
    const buscarAdministrador = await AdministradorCensoModel.findById(req.params.id)
    res.status(200).send(buscarAdministrador)
  } catch (error) {
    return res.status(500).send({
      message: error.message
    })
  }
}

exports.deletar = async (req,res) => {
  try {
     const deletarAdministrador = await AdministradorCensoModel.findByIdAndDelete(req.params.id)
      res.status(200).send(deletarAdministrador)
    }   catch (error) {
    return res.status(500).send({
      message: error.message
    })
  }
}

exports.entrar = async(req, res) => {
  try {
      const administrador = await AdministradorCensoModel.findOne({
        email:req.body.email
    
      })
      if (administrador == null || administrador.validarSenha(req.body.senha) == false) {
        return res.status(404).send ({
          message: "Usuário ou senha invalída"
        })
      }
      const token = jwt.sign({id:administrador.id},process.env.SECRET)
      res.status(200).send ({token})
  } catch (error) {
    return res.status(500).send({
      message: error.message
    })
  }
  
}