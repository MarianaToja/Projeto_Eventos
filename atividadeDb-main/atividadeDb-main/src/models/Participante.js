const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const evento = require("./Evento")

const Participante = sequelize.define('participante', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    eventoId: {
        type: DataTypes.INTEGER,
        references: {
            model: evento,
            key: 'id',
        }
    }
});


module.exports = Participante;
