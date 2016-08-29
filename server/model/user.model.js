var db = require('../database/db.js')
var _ = require('underscore')

var userModel = module.exports;

console.log('we are in User Model')

// two below for FB token
userModel.findUserById = function(FB_id) {
	console.log('we are in userModel inside findUserById')
	return db('Users').where({
		FB_id: FB_id
	}).limit(1)
	.then(function(rows) {
		return rows[0]
	})
}


// userModel.createUser = function(attr) {
// 	console.log('we are in userModel inside createUser: ')
// 	return new Promise(function(resolve,reject) {
// 		return db('Users').insert(attr)
// 		.then(function(result) {
// 			console.log('result inside createUser is', result)
// 			attr.id = result[0]
// 			return resolve(attr)
// 		})
// 	})
// }

userModel.createUser = function(attr) {
	console.log('inside user.model.js createUser ', attr)
	return new Promise(function(resolve, reject) {
		return db.insert({FB_id: attr.id}).into('Users')
		.then(function(result) {
			console.log('result inside createUser is', result)
			attr.id = result[0]
			return resolve(attr)
		})
	})
}



