var router = require('express').Router();
var controller = require('../controller/search.controller.js');

router.post('/restaurant', controller.search.getTopRestaurant)

module.exports = router;
