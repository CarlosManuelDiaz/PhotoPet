const express = require ('express')
const cors = require ('cors')

const bodyParser = require ('body-parser')
const app = express()
const port = process.env.PORT || 3000


app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(cors())

var Users = require ('./src/app/routes/Users')


app.use('/', Users)



app.listen(port, () => {
    console.log('Corriendo en http://localhost:' + port)
})





