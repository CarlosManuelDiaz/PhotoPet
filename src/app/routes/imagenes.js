const express = require("express")
const images = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")

const images = require("../models/images")
images.use(cors())

images.get('/perfil', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    User.findOne({
        where: {
            id_user: decoded.id_user
        },
    })
    .then(image => {
        if (image) {
            res.json(image)
        } else {
            res.send('la imagen no existe')
        }
    })
    .catch(err=>{
        res.send('Error en el catch:' + err)
    })
})