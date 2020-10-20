var express = require('express');
var router = express.Router();

const parametrosController = require('../controllers/parametro.controller');

router.get('/',parametrosController.findAllparametros);

router.get('/:idParametro',parametrosController.findOneparameter);
module.exports = router;