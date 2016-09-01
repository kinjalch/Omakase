//send me a city name and a food item and i want back the food and top resturant

//give me a city name, give her an array of all resturants in that city

//give me a username , food type, city, and resturant name, and add a vote for that user
var db = require('../database/db.js')
var _ = require('underscore')

var searchModel = module.exports;

searchModel.getAllDishNames = function() {
	console.log('we are in searchModel getAllDishNames')
	return db('Dishes').where({
		voteCount:1 
	}).select('dish_name')
	.then(function(rows) {
		return rows;
	})
}

searchModel.getTopRestaurant = function(params) {
	console.log('inside searchModel getTopRestaurant params is', params)
	return db('Dishes')
		.innerJoin('Locations', 'Locations.id','Dishes.location_id')
		.innerJoin('Restaurants','Restaurants.id', 'Dishes.restaurant_id')
	.where({
		"Dishes.dish_name":params.dish_name,
		"Locations.location_name":params.location_name
	})
	.select('Restaurants.restaurant_name').orderBy('voteCount', 'desc')
	.then(function(rows) {
		console.log('result inside searchModel inside getTopRestaurant', rows)
		return rows[0]
	})
}





searchModel.getArrayOfRestaurantNames = function() {
	console.log('we are in searchModel getArrayOfResturantNames')
	return db('Dishes').where({
		location_name: 'Santa Monica'
	}).select('resturant_id').from('Dishes').innerJoin('')
	.then(function(rows) {
		return rows;
	})
}



//wrap db functions in a function fetchResturants and call it in controllers. 
// then attach it to my routes as my callback

//now db is knex

