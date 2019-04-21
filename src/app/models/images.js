const Sequelize = require('sequelize')
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  'images',
  {
    id_images: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_likes: {
      type: Sequelize.INT
    },
    id_user: {
      type: Sequelize.INT
    },
    photo: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  });