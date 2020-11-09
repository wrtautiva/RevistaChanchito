const  dbManager = require('../database/database.manager');
const jwt = require ('jsonwebtoken');

async function singnupuser (req,res){

    try{
        const { usercorreo,userpasword } = req.body;


        const user = await  dbManager.Usuario.findOne({
            where:{
                usercorreo: usercorreo,
                userpasword:userpasword
            }
        });
        const token =jwt.sign({idUser:user.idUser},'secretkey');
        user.update({
            token: token
        })
        res.status(200).json({token});
    }catch (e){
        console.log(e);
        res.status(500).send({
        message: "THE USER OR PASWORD DOESN'T EXIST"
        });
    }


}

exports.singnupuser = singnupuser;