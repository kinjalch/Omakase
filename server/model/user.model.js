var db = require('../database/db.js')
var _ = require('underscore')

var userModel = module.exports

userModel.addUser = function(attr) {
	return new Promise(function(resolve,reject) {
		return db('Users').insert(attr)
		.then(function(result) {
			attr.id = result[0]
			return resolve(attr)
		})
	})
}

userModel.findUserById = function(params) {
	return db('Users').where({
		FB_id: params.FB_id
	}).limit(1)
	.then(function(rows) {
		return rows[0]
	})
}
