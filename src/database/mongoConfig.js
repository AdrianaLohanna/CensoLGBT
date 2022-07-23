const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Banco de dados conectado com todo sucesso do CLOSE!");
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    connect
}
