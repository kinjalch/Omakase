var db = require('../database/db.js')
var _ = require('underscore')

var dishModel = module.exports;

dishModel.findDish = function(params) {
	return db('Dishes')
		.innerJoin('Locations', 'Locations.id','Dishes.location_id')
		.innerJoin('Restaurants','Restaurants.id', 'Dishes.restaurant_id')
	.where({
		"Restaurants.restaurant_name": params.Restaurant.restaurant_name,
		"Dishes.dish_name":params.Dish.dish_name,
		"Locations.location_name":params.Location.location_name
	})
	.select('dish_name')
	.then(function(rows) {
		return rows[0]
	})
}

dishModel.incrementVoteCount = function(params) {
	console.log('we are inside incrementVoteCount')
	return db('Dishes')
	.innerJoin('Locations', 'Locations.id','Dishes.location_id')
	.innerJoin('Restaurants','Restaurants.id', 'Dishes.restaurant_id')
	.where({
		"Restaurants.restaurant_name": params.Restaurant.restaurant_name,
		"Dishes.dish_name":params.Dish.dish_name,
		"Locations.location_name":params.Location.location_name
	})
	.increment('voteCount', 1)
	.select('voteCount')
	.then(function(rows) {
		return rows[0]
	})
}

dishModel.addDishEntry = function(params) {
		return new Promise(function(resolve,reject) {
			return db('Restaurants').insert(params.Restaurant)
			.then(function(result) {
				params.Dish.restaurant_id = result[0]
				return params
			})
			.then(function(params) {
				console.log('params in second promise', params)
				return db('Locations').insert(params.Location)
				.then(function(result) {
					params.Dish.location_id = result[0]
					return params
				})
			})
			.then(function(params) {
				console.log('params in third promise', params)
				return db('Dishes').insert(params.Dish)
				.then(function(result) {
					return resolve(params)
				}) 
			})
		})
}

