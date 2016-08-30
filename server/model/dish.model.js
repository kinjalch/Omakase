var db = require('../database/db.js')
var _ = require('underscore')

var dishModel = module.exports;

dishModel.findDish = function(params) {
	console.log('we are in dishModel inside findDish')
	console.log('params inside dishModel inside findDish', params)
	return (db('Dishes').whereExists(function() {
	this
	.select('restaurant_name','address','imageUrl','location_name')
	.from('Dishes')
	.innerJoin('Locations','Restaurants')
	.where([{restaurant_name: 'Baja Fest'},{dish_name: 'burrito'}, {location_name: 'Santa Monica'}])
	.orderBy('voteCount', 'desc')
	.limit(1)
	}))
	.then(function(rows) {
		return rows;
	})
}

dishModel.incrementVoteCount = function() {
	return db('Dishes').increment('voteCount', 1)
	.then(function(rows) {
		return rows;
	})
}

dishModel.createDish = function(params) {
	//insertion function FIX
	console.log('we are inside createDish inside dishModel')
	console.log('params inside createDish inside dishModel', params)
	return new Promise(function(resolve, reject) {
		return db('Dishes').insert(params)
		.then(function(result) {
			console.log('result inside createDish is', result)
			return resolve(params)
		})
	})
}

