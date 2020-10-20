const  dbManager = require('../database/database.manager');

async function findAllseccion (req, res) {

    try {
        const seccion = await  dbManager.Seccion.findAll();
        res.json({
            data:seccion
        })
    }catch (e){

        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

exports.findAllseccion = findAllseccion;