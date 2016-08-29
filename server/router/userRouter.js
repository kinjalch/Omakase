var router = require('express').Router();
var controller = require('../controller/user.controller.js');

console.log('we are in userRouter')
router.get('/add', controller.user.add)


module.exports = router;