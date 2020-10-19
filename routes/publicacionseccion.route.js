var express = require('express');
var router = express.Router();

const publicacionSeccionController = require ('../controllers/publicacionseccion.controller');
router.get('/',publicacionSeccionController.findAllpublicacionseccion);
module.exports = router;