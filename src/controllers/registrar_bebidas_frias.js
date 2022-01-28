const {bebidasFrias} = require('../models')

async function registrarBebidasFrias(req, res) {
    try {
        const {new_bebida} = req.body
        
        var bebida = new bebidasFrias(new_bebida)
        await bebida.save()
        res.json(bebida)

    } catch (error) {
        res.json({error})
    }
    
}

module.exports = registrarBebidasFrias