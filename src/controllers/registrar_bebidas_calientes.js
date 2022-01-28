const {bebidasCalientes} = require('../models')

async function registrarBebidasCalientes(req, res) {
    try {
        const {new_bebida} = req.body
        
        var bebida = new bebidasCalientes(new_bebida)
        await bebida.save()
        res.json(bebida)

    } catch (error) {
        res.json({error})
    }
    
}

module.exports = registrarBebidasCalientes
