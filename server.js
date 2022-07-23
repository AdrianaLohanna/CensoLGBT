const app = require('./src/app')
const PORT = process.env.PORT || 8090
app.listen(PORT, () => console.log(`Servidor rodando e dando close na porta ${PORT}`));
