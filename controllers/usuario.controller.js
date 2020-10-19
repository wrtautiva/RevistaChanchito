const  dbManager = require('../database/database.manager');

async function findAllusuarios (req, res) {
    try{
        const users = await  dbManager.Usuario.findAll();
        res.json({
            data:users
        })
    }catch (e){
        res.status(500).send({
            message: "Some error occurred"
        });

    }
}
exports.findAllusuarios = findAllusuarios;