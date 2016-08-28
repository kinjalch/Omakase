var router = require('express').Router();
var controller = require('../controller/search.controller.js');

console.log('we are in router')
router.get('/dish', controller.search.getDish)
// router.get('/resturants', controller.getResturants)

module.exports = router;