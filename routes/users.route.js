var express = require('express');
var router = express.Router();
const userController = require ('../controllers/user.controller'); 

router.get.route.findAllUsers;

router.get('/', userController.findAllUsers);

router.get.findAllUsers;

router.get('/:idUser', userController.findOneUser);

router.post.findOneUser;
 
router.post ('/',userController.createUser);

router.post.createUser;

router.put ('/:idUser',userController.updateUser);

router.put.updateUser;

router.delete ('/:username',userController.deleteUserByUsername);

router.delete.deleteUserByUsername;

router.delete ('/',userController.deleteAllUsers);

router.delete.deleteAllUsers;

router.get('/query/:creation_date', userController.findAllUsersByCreatedDate);


// Export router
module.exports = router;

