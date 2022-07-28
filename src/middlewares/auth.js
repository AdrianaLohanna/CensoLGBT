const jwt = require("jsonwebtoken")


exports.protegido =(req,res,next) => {
    try {
       const autorizacao = req.get("authorization")
       if (!autorizacao) {

        return res.status(401).send ({
            message: "Desculpa, acesso não autorizado"
        })
       }

       const token = autorizacao.split(" ")[1]
       console.log(token)
       const resultado = jwt.verify(token,process.env.SECRET)
       next()
    } catch (error) {
        return res.status(401).send ({
            message: error.message
        }) 
    }
}