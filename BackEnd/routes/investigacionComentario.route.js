var express = require('express');
var router = express.Router();
const investigacionComentarioController = require('../controllers/investigacionComentario.controller');

router.get('/', investigacionComentarioController.retornarInvestigacioneComentarios);

router.post('/', investigacionComentarioController.crearInvestigacionComentario);

router.get('/:investigacionComentarioId', investigacionComentarioController.retonarInvestigacionComentario);

router.put('/:investigacionComentarioId', investigacionComentarioController.actualizarInvestigacionComentario);

router.delete('/:investigacionComentarioId', investigacionComentarioController.eliminarInvestigacionComentario);

module.exports = router;
