const mongoose = require('mongoose')

const CrepasSaladas = mongoose.Schema({
    nombre: String,
    descripcion: String,
    precio: Number,
    medidas: []
})

//Transformando el Schema en un modelo para la BD
module.exports = mongoose.model('crepas_saladas', CrepasSaladas)