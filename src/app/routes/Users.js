const express = require("express")
const app = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
var mysql = require('mysql')
const bodyparser = require('body-parser')

const User = require("../models/User")
app.use(cors());
app.use(bodyparser.json());

process.env.SECRET_KEY = 'secret'

//registro
app.post("/registro", (req, res) => {
    const today = new Date()
    const userData = {
        user_name: req.body.user_name,
        email: req.body.email,
        password: req.body.password,
        created: today
    }
    User.findOne({
        where: {
            email: req.body.email
        }
    })          
        .then(user => {
            if (!user) {
                const hash = bcrypt.hashSync(userData.password, 10)
                userData.password = hash
                User.create(userData)
                    .then(user => {
                        let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                            expiresIn: 1440
                        })
                        res.json({ token: token })
                    })
                    .catch(err => {
                        res.send('error: ' + err)
                    })
            } else {
                res.json({ error: 'El usuario ya existe' })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

//Login
app.post('/login', (req, res)=>{
    User.findOne({
        where:{
            email: req.body.email
        }
    })
    .then(user =>{
        if(bcrypt.compareSync(req.body.password, user.password)){
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                expiresIn: 1440
            })
            res.json({token: token})
        }else{
            res.send('Revise los datos introducidos')
        }
    })
    .catch(err => {
        res.send("error" + err)
    })
})

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "photopet"
  });

//perfil
app.get('/perfil', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
    var id_user = decoded.id_user
        connection.query("SELECT user_name, id_photo_perfil, imagesprofile.urlphoto FROM users INNER JOIN imagesprofile ON users.id_user = imagesprofile.id_user WHERE users.id_user=? ", [id_user],
            function (err, result) {
                if (result) {
                    res.json(result)
                } else {
                    res.send(err)
                }
            }
        )
});

module.exports = app