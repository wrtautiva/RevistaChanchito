var express = require('express');
var router = express.Router();


const  publicacionController = require('../controllers/publicacion.controller');
router.get('/',publicacionController.findAllpublicacion);
module.exports =router;