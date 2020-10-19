var express = require('express');
var router = express.Router();

const volumenController = require('../controllers/volumen.controller');
router.get ('/',volumenController.findAllvolumen);
module.exports = router;