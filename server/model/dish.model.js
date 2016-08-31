var db = require('../database/db.js')
var _ = require('underscore')

var dishModel = module.exports;

// dishModel.findDish = function(params) {
// 	console.log('we are in dishModel inside findDish')
// 	console.log('+++****+++params inside dishModel inside findDish: ', params)
// 	return db('Dishes')
// 	.select(['restaurant_name','address','imageUrl','location_name'])
// 	.innerJoin('Locations','Restaurants')
// 	.innerJoin('Locations','Dishes.locations_id','Locations.id')
// 	// .innerJoin('Restaurants', 'Dishes.restaurant_id', 'Restaurants.id')
// 	.where({
// 		"restaurant_name": params.Restaurant.restaurant_name,
// 		"dish_name":params.Dish.dish_name,
// 		"location_name":params.Location.location_name
// 	})
// 	.orderBy('voteCount', 'desc')
// 	.limit(1)
// 	.then(function(rows) {
// 		console.log('we are in findDish inside dishModel and rows are : ',rows)
// 		return rows[0];
// 	});
// }

//This will check if a dish exists
dishModel.findSimple = function(params) {
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




//this works
dishModel.incrementVoteCount = function() {
	return db('Dishes').increment('voteCount', 1)
	.then(function(rows) {
		return rows;
	})
}

	//insertion function FIX
dishModel.createDish = function(params) {
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



