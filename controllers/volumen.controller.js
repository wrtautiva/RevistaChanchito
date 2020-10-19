const  dbManager = require('../database/database.manager');

async function findAllvolumen (req, res) {
    try {
        const volumen = await  dbManager.Volumen.findAll();
        res.json({
            data:volumen
        })
    }catch (e){
        res.status(500).send({
            message: "Some error occurred"
        });
    }

}
exports.findAllvolumen = findAllvolumen;