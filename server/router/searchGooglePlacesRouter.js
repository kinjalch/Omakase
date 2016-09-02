var router = require('express').Router();
var controller = require('../controller/search.getRestaurantList.js');

router.get('/vote', controller.search.getRestaurantList)

module.exports = router;
