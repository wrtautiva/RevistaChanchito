var express = require('express');
var router = express.Router();

const seccionController = require('../controllers/seccion.controller');
router.get('/',seccionController.findAllseccion);
module.exports =router;