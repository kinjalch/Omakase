var router = require('express').Router();
var controller = require('../controller/user.controller.js');

console.log('we are in userRouter')



router.post('/add', controller.user.createUser)


module.exports = router;