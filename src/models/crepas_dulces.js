const mongoose = require('mongoose')

const CrepasDulces = mongoose.Schema({
    nombre: String,
    descripcion: String,
    precio: Number,
    medidas: []
})

//Transformando el Schema en un modelo para la BD
module.exports = mongoose.model('crepas_dulces', CrepasDulces)