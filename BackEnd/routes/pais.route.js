var express = require('express');
var router = express.Router();
const paisController = require('../controllers/pais.controller');

router.get('/', paisController.retornarPaises);

router.post('/', paisController.crearPais);

router.get('/:paisId', paisController.retonarPais);

router.put('/:paisId', paisController.actualizarPais);

router.delete('/:paisId', paisController.eliminarPais);

module.exports = router;
