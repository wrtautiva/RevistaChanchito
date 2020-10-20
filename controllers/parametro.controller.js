const  dbManager = require('../database/database.manager');

async function findAllparametros (req, res) {

    try{

        const parameters = await  dbManager.Parametro.findAll();
        res.json({
            data:parameters
        })
    }catch (e){
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

/**
 * get parametrobyid
 */

async function findOneparameter (req,res){

    try{
        const { idParametro } = req.params;

        const parametro = await dbManager.Parametro.findOne({
            where: {
                idParametro: idParametro
            }
        });
        res.json(parametro);
    }catch (e){
        res.status(500).send({
            message: "Some error occurred"
        });

    }
}

exports.findAllparametros = findAllparametros;
exports.findOneparameter = findOneparameter;