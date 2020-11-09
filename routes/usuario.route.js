var express = require('express');
var router = express.Router();

const usuarioController = require('../controllers/usuario.controller');

router.get('/',usuarioController.findAllusuarios);

router.post ('/',usuarioController.createUser);


module.exports = router;