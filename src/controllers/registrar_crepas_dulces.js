const {crepasDulces} = require('../models')

async function registrarCrepasDulces(req, res) {
    try {
        const {new_crepa} = req.body
        
        var crepa = new bebidasCalientes(new_crepa)
        await crepa.save()
        res.json(crepa)

    } catch (error) {
        res.json({error})
    }
    
}

module.exports = registrarCrepasDulces
