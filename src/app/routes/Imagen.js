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
   con.query("SELECT * FROM images", function (err, result, fields) {
     console.log(result);
     res.send(result)
   })
  });
  // "SELECT * FROM images INNER JOIN comments ON images.id_images = comments.id_images"
  
module.exports = images
