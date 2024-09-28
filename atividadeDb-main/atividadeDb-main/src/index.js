require('dotenv').config();
const express = require("express");
const router = require("./router/router");
const sequelize = require("./config/config");
const cors = require('cors');

const app = express()

app.use(cors());

app.use(express.json());
app.use("/api", router);

app.get("healthcheck", (req, res) => {
    return res.status(200).json({
        msg: "Estamos vivos!",
        alive: true,
    });
});

sequelize
.authenticate()
.then(async () => {
    console.log("conexão estabelecida");
    await sequelize.sync();
})
.then(() =>{
    app.listen(process.env.PORT == null ? 8080 : process.env.PORT, () => {
        console.log("---------------------------------")
        console.log("Servidor Funcionando")
        console.log("---------------------------------")
    })
})
.catch((error) => {
    console.error("Erro ao se conectar com o banco:", error)
})
