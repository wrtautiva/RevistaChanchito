var express = require('express');
var router = express.Router();
const  infoiniController = require('../controllers/infoini.controller');


router.get('/',infoiniController.findAllinfoini);

module.exports = router;

