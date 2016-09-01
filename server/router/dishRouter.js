var router = require('express').Router();
var controller = require('../controller/dish.controller.js');

router.post('/add', controller.dish.postDish)

module.exports = router;
