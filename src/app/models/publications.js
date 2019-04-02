const Sequelize = require('sequelize')
/*const db = require("../database/db.js");*/

    module.exports= db.sequelize.define('publications', {
    id_comment: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement:true,},
    id_user: Sequelize.INT,
    text: Sequelize.STRING,
  },
  {
    timestamps: false
});
