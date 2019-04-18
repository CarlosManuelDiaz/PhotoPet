const express =require("express")
const images =express.Router()
var mysql =require("mysql")
const cors =require("cors")

images.use(cors())
var con = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "",
 database: "photopet"
});

images.get("/general", (req,res) =>{
 //con.connect(function(err) {
   //if (err) throw err;
   con.query("SELECT * FROM images", function (err, result, fields) {
     if (err) throw err;
     console.log(result);
     res.send(result)
   });
 });

module.exports = images
