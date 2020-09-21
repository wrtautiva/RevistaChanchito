const dbManager = require ('../database.config/database.manager');

/**
 * Creation of an user
 * @param {*} userObject JSON Object with User information
 */
async function createUser (req, res) {
    
    // CHECK IF THE REQUEST BODY IS EMPTY
    if (!req.body) {
        res.status(400).send({
          message: "Request body is empty!!!!"
        });
        return;
    }
    
    // CREATING THE OBJECT TO PERSIST
    const newUserObject = {
        username: req.body.username,
        creation_date: req.body.creation_date
    }
    
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.User.create(newUserObject).then (
        data => {
            res.send (data);
        }
    ).catch (
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

/**
 * GEt all users
 */
async function findAllUsers (req, res){
    try {
        //Execute query
        const users = await dbManager.User.findAll ();

        //Send response
        res.json({
                data: users
        });
    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

/**
 * Get user by id
 */
async function findOneUser (req, res){
    try {
        const { idUser } = req.params;

        //Execute query
        const user = await dbManager.User.findOne({
            where: {
                idUser: idUser
            }
        });
        //Send response
        res.json(user);

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

/**
 * Update user
 */
async function updateUser (req, res)  {
    const { idUser } = req.params;
    await dbManager.User.update(req.body, {
        where:{idUser: idUser}
    });
    res.json({success :'se modifico'})
}

async function deleteUserByUsername  (req, res)  {
    const { username } = req.params;
    await dbManager.User.destroy( {
        where:{userName: username }
    })
    res.json({success: 'user delete'})

}

async function deleteAllUsers (req, res){
    await dbManager.User.destroy({
        where:{}
    })
    res.json({success: 'delete all'})
}

async function findAllUsersByCreatedDate (req, res){
    const { creation_date } = req.params;
    const user = await dbManager.User.findOne({
        where: {
            creation_date: creation_date
        }
    });
    res.json(user);

}


exports.createUser = createUser; 
exports.findAllUsers = findAllUsers; 
exports.findOneUser = findOneUser; 
exports.updateUser = updateUser;
exports.deleteUserByUsername = deleteUserByUsername;
exports.deleteAllUsers = deleteAllUsers;
exports.findAllUsersByCreatedDate = findAllUsersByCreatedDate;