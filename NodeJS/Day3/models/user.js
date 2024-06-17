const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const { type } = require('os');

const User = sequelize.define('user', {
    id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
       type: Sequelize.STRING,
       allowNull: false,
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
     },
    password:{
        type: Sequelize.STRING,
        allowNull: false,
     },
    remark:{
        type: Sequelize.STRING,
        
     },
});

module.exports = User;