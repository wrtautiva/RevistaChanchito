const  dbManager = require('../database/database.manager');

async function findAllpublicacionseccion (req, res) {



    try{
        const publicacionseccion = await  dbManager.PublicacionSeccion.findAll();
        res.json({
            data:publicacionseccion
        })
    }catch (e){
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

exports.findAllpublicacionseccion =findAllpublicacionseccion;