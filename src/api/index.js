const {Router} = require('express')
const registrarBebidasCalientes = require('../controllers/registrar_bebidas_calientes')
const router = Router()
const registrarBebidasFrias = require('../controllers/registrar_bebidas_frias')



router
.post('/crear/bebidas/frias', registrarBebidasFrias)
.post('/crear/bebidas/calientes', registrarBebidasCalientes)

module.exports = router
