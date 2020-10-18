const  dbManager = require('../database/database.manager');

async function findAllinfoini (req, res){

    try {
        const  info = await  dbManager.Ininfo.findAll();
        console.log(info);
        res.json({
            data:info
        })
    }catch (e){
        res.status(500).send({
            message: "Some error occurred"
        });

    }
}
exports.findAllinfoini = findAllinfoini;
