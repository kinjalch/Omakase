var router = require('express').Router();
var controller = require('../controller/photo.controller.js');

router.post('/upload', controller.photo.postPhoto);

module.exports = router;
