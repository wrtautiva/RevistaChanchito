var express = require('express');
var router = express.Router();
const postulacionComentarioController = require('../controllers/postulacionComentario.controller');

router.get('/', postulacionComentarioController.retornarPostulacionComentarios);

router.post('/', postulacionComentarioController.crearPostulacionComentario);

router.get('/:postulacionComentarioId', postulacionComentarioController.retonarPostulacionComentario);

router.put('/:postulacionComentarioId', postulacionComentarioController.actualizarPostulacionComentario);

router.delete('/:postulacionComentarioId', postulacionComentarioController.eliminarPostulacionComentario);

module.exports = router;
