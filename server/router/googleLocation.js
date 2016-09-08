var router = require('express').Router();
var controller = require('../controller/location.controller.js');

router.post('/getLocation', controller.getLongLat);

module.exports = router;
