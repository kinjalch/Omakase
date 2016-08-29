var userModel = require('../model/user.model.js');

console.log('we are in userController')
exports.user = {
	add: addUser
}


function addUser(req, res) {
	console.log('we are in createUser', req.query)
	var newUser = {
		name: req.query.name, //req.body.name
		FB_id: req.query.id //req.body.FB_id
	}
	userModel.findUserById(newUser)
		.then(function(user) {
			if (user) {
				console.log("User already exists!");
				res.end("User already exists");
			}  else {
				userModel.addUser(newUser)
					.then(function(result) {
						console.log('result inside userController', result)
						res.send(result)
					})
					.catch(function(err) {
						console.error('Error inside createUser', err)
						res.end('Error inside create user', err)
					})
			}
		})
		.catch(function(err) {
			console.log('Error inside findUserById', err)
			res.end('Error inside findUserById', err)
		})
	}

	




