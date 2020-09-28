var express = require('express');
var router = express.Router();
const contactoController = require('../controllers/contacto.controller');

router.get('/', contactoController.retornarContactos);

router.post('/', contactoController.crearContacto);

router.get('/:contactoId', contactoController.retonarContacto);

router.put('/:contactoId', contactoController.actualizarContacto);

router.delete('/:contactoId', contactoController.eliminarContacto);

module.exports = router;
