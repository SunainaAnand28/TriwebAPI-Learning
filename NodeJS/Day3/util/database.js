const sequelize = require('sequelize');

const sequelize = new Sequelize("workshop","root","",{
dialect: "mysql",
host: "localhost"

});

module.exports = sequelize;