const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('feiraeventos', 'root', 'root',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
