const  dbManager = require('../database/database.manager');

async function findAllpublicacion (req, res) {

    try {
        const publicacion = await  dbManager.Publicacion.findAll();
        res.json({
            data:publicacion
        })

    }catch (e){
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

exports.findAllpublicacion = findAllpublicacion;