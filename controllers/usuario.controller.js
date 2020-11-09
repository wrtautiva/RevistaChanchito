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

async function  createUser (req,res){

   if (!req.body){
        res.status(400).send({
            mensage: "no exsite ninguna solicitud asociado a esa peticion de usuario"
        });
        return;
    }

    const  newUserobj = {
        username: req.body.username,
        usernombre: req.body.usernombre,
        userapellido: req.body.userapellido,
        usercorreo: req.body.usercorreo,
        userpasword: req.body.userpasword,
        userstado: req.body.userstado,
        creation_date: req.body.creation_date
    }

   dbManager.Usuario.create(newUserobj).then(
       data => {
           res.send (data);
       }
   ).catch(
       e => {
           // Print error on console
           console.log(e);
           // Send error message as a response
           res.status(500).send({
               message: "Some error occurred"
           });
       }
   );
}
exports.findAllusuarios = findAllusuarios;
exports.createUser = createUser;