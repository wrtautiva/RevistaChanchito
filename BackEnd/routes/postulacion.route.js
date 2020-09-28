var express = require('express');
var router = express.Router();
const postulacionController = require('../controllers/postulacion.controller');

router.get('/', postulacionController.retornarPostulaciones);

router.post('/', postulacionController.crearPostulacion);

router.get('/:postulacionId', postulacionController.retonarPostulacion);

router.put('/:postulacionId', postulacionController.actualizarPostulacion);

router.delete('/:postulacionId', postulacionController.eliminarPostulacion);

module.exports = router;
