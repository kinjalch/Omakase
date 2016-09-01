var router = require('express').Router();
var controller = require('../controller/user.controller.js');

router.get('/add', controller.user.add)

module.exports = router;
