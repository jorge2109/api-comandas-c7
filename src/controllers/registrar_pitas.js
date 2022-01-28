const {pitas} = require('../models')

async function registrarPitas(req, res) {
    try {
        const {new_pita} = req.body
        
        var pita = new Pitas(new_pita)
        await pita.save()
        res.json(pita)

    } catch (error) {
        res.json({error})
    }
    
}

module.exports = registrarPitas