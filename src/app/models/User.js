const Sequelize = require ('sequelize');
const db = require("../database/db.js");

module.exports = db.sequelize.define(
    'user',
    {
        id_user: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_name: {
            type: Sequelize.STRING
        },
        email:{
            type: Sequelize.STRING
        },
        password:{
            type: Sequelize.STRING
        },
        created:{
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        id_photo_perfil:{
            type: Sequelize.STRING
        },
    },
    {
        timestamps: false
    }
)