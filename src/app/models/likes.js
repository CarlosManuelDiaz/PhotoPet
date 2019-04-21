const Sequelize = require('sequelize')
/*const db = require("../database/db.js");*/

    module.exports= db.sequelize.define('likes', {
    id_likes: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement:true,},
    id_users: Sequelize.INT,
  },
  {
    timestamps: false
});