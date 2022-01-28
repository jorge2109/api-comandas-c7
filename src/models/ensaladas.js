const mongoose = require('mongoose')

const Ensaladas = mongoose.Schema({
    nombre: String,
    descripcion: String,
    precio: Number,
    medidas: []
})

//Transformando el Schema en un modelo para la BD
module.exports = mongoose.model('ensaladas', Ensaladas)