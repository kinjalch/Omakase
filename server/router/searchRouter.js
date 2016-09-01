var router = require('express').Router();
var controller = require('../controller/search.controller.js');

console.log('we are in search router')
router.post('/restaurant', controller.search.getTopRestaurant)
// router.post('/resturants', controller.search.getResturants)



module.exports = router;