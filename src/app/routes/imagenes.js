const express = require("express")
const imagenes = express.Router()
var mysql = require('mysql')
const cors = require("cors")

imagenes.use(cors())

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "photopet"
});

imagenes.get("/general", (req,res) =>{
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM images", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send(result)
    });
  });
})

module.exports = imagenes