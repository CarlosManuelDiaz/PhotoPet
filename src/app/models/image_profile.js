const Sequelize = require('sequelize')
/*const db = require("../database/db.js");*/

    module.exports= db.sequelize.define('images_profile', {
    id_images_profile: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement:true,},
     id_user:Sequelize.INT,
  },
  {
    timestamps: false
});