var router = require('express').Router();
var controller = require('../controller/location.controller.js');

router.post('/getLocation', controller.convertAddress);

module.exports = router;
