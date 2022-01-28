const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const api = require('../api')
require('dotenv').config({path: '.env'})

//Manda llamar las variables desdde el archivo ".env"
const db = process.env.URI

app.use(express.json())
app.use(cors())
app.use(morgan('combined'))

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(api)

app.get('/', (req, res) => {
    res.send("Holaaa")
})

module.exports = app
