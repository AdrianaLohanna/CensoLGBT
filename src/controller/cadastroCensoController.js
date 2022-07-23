const UserSchema = require("../models/cadastroCensoModels");




// exports.createCadastro = async (req,res)=>{
//     const newCadastro = new UserSchema (req.body);
//     const savedUser = await newCadastro.save();
//     return res.status(201).send(savedUser)
// }


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
