var router = require('express').Router();
var controller = require('../controller/search.controller.js');

console.log('we are in search router')
router.get('/dish', controller.search.getDish)
// router.get('/resturants', controller.search.getResturants)



module.exports = router;