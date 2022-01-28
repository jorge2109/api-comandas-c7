const {crepasSaladas} = require('../models')

async function registrarCrepasSaladas(req, res) {
    try {
        const {new_crepa} = req.body
        
        var crepa = new crepasSaladas(new_crepa)
        await crepa.save()
        res.json(crepa)

    } catch (error) {
        res.json({error})
    }
    
}

module.exports = registrarCrepasSaladas
