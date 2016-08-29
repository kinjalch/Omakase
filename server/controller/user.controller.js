var userModel = require('../model/user.model.js');

console.log('we are in userController')
exports.user = {
	createUser: createUser
}
//getUser is a get (req.query)
//addUser is a post (req.body)
console.log('we are in user controller general')


// check if user already exists and then create one if it doesn't

function createUser(req, res) {
	console.log('we are in createUser', req.query)
	var newUser = {
		name: 'JonnyBoy', //req.body.name
		FB_id: '12345' //req.body.FB_id
	}
	UserModel.findUserById(newUser.FB_id)
		.then(function(user) {
			if (user) {
				console.log("User already exists!");
				res.end("User already exists");
			}  else {
				UserModel.createUser(newUser)
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

	




