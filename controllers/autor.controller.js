const  dbManager = require('../database/database.manager');

async function findAllAutores (req, res){

    try {
          const  autor = await  dbManager.Autor.findAll();
          console.log(autor);
          res.json({
              data:autor
          })
    }catch (e){
        res.status(500).send({
            message: "Some error occurred"
        });

    }
}

exports.findAllAutores = findAllAutores;