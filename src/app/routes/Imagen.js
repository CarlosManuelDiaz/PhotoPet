const express =require("express")
const images =express.Router()
var mysql =require("mysql")
const cors =require("cors")
const multer = require("multer")
const fs = require("fs")

let UPLOAD_PATH = 'uploads'
const upload = multer ({dest: '/uploads'});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, UPLOAD_PATH)
  },
  filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
  }
})

images.use(cors())
var con = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "",
 database: "photopet"
});

images.get("/general", (req,res) =>{
   con.query("SELECT * FROM images INNER JOIN comments ON images.id_images = comments.id_images LEFT JOIN users ON images.id_user = users.id_user ORDER BY images.id_images desc", 
   function (err, result, fields) {
    res.send(result)
    console.log(result)
   })
  });
 
  
images.post("/upload", upload.single('image'), (req, res, next) => {
  console.log(req.file.filename, req.file.originalname, req.body.desc,  req.file)
});


module.exports = images
