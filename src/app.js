require('dotenv-safe').config();
const express = require("express");
const app = express();
const cors = require('cors');
const db = require('./database/mongoConfig');
const formulariosRoutes = require('./routes/formularioCensoRoutes');
const administradorRoutes = require('./routes/administradorCensoRoutes');
const indexRoutes = require('./routes/');

app.use(express.json());
app.use(cors());

db.connect()

app.use(indexRoutes)
app.use("/formularios", formulariosRoutes)
app.use("/administradores", administradorRoutes)

module.exports = app
