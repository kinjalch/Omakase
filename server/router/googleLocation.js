var router = require('express').Router();
var controller = require('../controller/location.controller.js');

router.get('/getLocation', controller.addressModel.convertAddress);

module.exports = router;
