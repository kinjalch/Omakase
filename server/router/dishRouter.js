var router = require('express').Router();
var controller = require('../controller/dish.controller.js');

console.log('we are in dish router')
router.post('/post', controller.dish.postDish)



module.exports = router;