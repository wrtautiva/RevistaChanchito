var express = require('express');
var router = express.Router();
const investigacionController = require('../controllers/investigacion.controller');

router.get('/', investigacionController.retornarInvestigaciones);

router.post('/', investigacionController.crearInvestigacion);

router.get('/:contactoId', investigacionController.retonarInvestigacion);

router.put('/:contactoId', investigacionController.actualizarInvestigacion);

router.delete('/:contactoId', investigacionController.eliminarInvestigacion);

module.exports = router;
