var db = require('../database/db.js')
var _ = require('underscore')


var userModel = module.exports

userModel.addUser = function(attr) {
	console.log('attr inside addUser in model is ', attr)
	console.log('we are in userModel inside createUser: ')
	return new Promise(function(resolve,reject) {
		return db('Users').insert(attr)
		.then(function(result) {
			console.log('result inside createUser is', result)
			attr.id = result[0]
			return resolve(attr)
		})
	})
}

userModel.findUserById = function(params) {
	console.log('we are in userModel inside findUserById')
	console.log("params in findUserById", params)
	return db('Users').where({
		FB_id: params.FB_id
	}).limit(1)
	.then(function(rows) {
		return rows[0]
	})
}





