var express = require('express');
var router = express.Router();
const autorController = require('../controllers/autor.controller');

router.get('/',autorController.findAllAutores);

module.exports = router;

