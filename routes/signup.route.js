var express = require('express');
var router = express.Router();

const signupController  = require('../controllers/signup.controller')

router.post('/',signupController.singnupuser);

module.exports = router;