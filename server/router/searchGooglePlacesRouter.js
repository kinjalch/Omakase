var router = require('express').Router();
var controller = require('../controller/searchGoogle.controller.js');

router.get('/RestaurantSearchBar', controller.searchGooglePlacesModel.getRestaurantList)

module.exports = router;
