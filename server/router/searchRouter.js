var router = require('express').Router();
var controller = require('../controller/search.controller.js');

router.get('/dish', controller.getDish)
router.get('/resturants', controller.getResturants)

module.exports = router;