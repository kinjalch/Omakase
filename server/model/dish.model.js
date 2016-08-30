var db = require('../database/db.js')
var _ = require('underscore')

var dishModel = module.exports;

dishModel.postDish = function(params) {
	console.log('params coming in are', params)
	console.log('we are in dishModel getAllDishNames')
	return db('Dishes').where({
		voteCount:1 
	}).select('dish_name')
	.then(function(rows) {
		return rows;
	})
}

