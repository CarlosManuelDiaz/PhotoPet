const express = require("express")
const users = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const User = require("../models/User")
users.use(cors())

process.env.SECRET_KEY = 'secret'

//registro
users.post("/registro", (req, res) => {
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
users.post('/login', (req, res)=>{
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

//perfil
users.get('/perfil', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    User.findOne({
        where: {
            id_user: decoded.id_user
        }
    })
        .then(user => {
            if (user) {
                res.json(user)
            } else {
                res.send('El usuario no existe')
            }
        })
        .catch(err=>{
            res.send('Error en el catch:' + err)
        })
})



module.exports = users