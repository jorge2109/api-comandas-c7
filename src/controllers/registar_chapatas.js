const {chapatas} = require('../models')

async function registrarChapatas(req, res) {
    try {
        const {new_chapata} = req.body
        
        var chapata = new chapata(new_chapata)
        await chapata.save()
        res.json(chapata)

    } catch (error) {
        res.json({error})
    }
    
}

module.exports = registrarChapatas
