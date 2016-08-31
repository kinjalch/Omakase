var searchModel = require('../model/search.model.js');

console.log('we are in searchController')
exports.search = {
	getTopRestaurant: getTopRestaurant
}


function getTopRestaurant(req,res) {
	console.log('we are in searchController inside getTopRestaurant');
	console.log('we are in searchControll inside getTopRestaurant req.query is', req.query);
	searchModel.getTopRestaurant(req.query)
	.then(function(result) {
		console.log('inside searchcontroller inside getTopRestaurant result is', result)
		return res.send(result)
	})
	.catch(function(err) {
		console.log('Error in getTopRestaurant', err)
		res.end('Error in getTopRestaurant', err)
	})
}



function getDish(req, res) {
	console.log('inside search.controller GET reqbody: ',req.query);
	searchModel.getAllDishNames()
	.then(function(data) {
		console.log('data inside search.controller.js');
		res.status(200).send(data);
	})
	.catch(function(error) {
		console.error('error inside search.controller.js', error)
		res.status(404).send(error)
	})
}

function getRestaurants(req, res) {
	console.log('inside search.controller GET reqbody: ',req.query);
	searchModel.getArrayOfResturantNames()
	.then(function(data) {
		console.log('data inside search.controller.js');
		res.status(200).send(data);
	})
	.catch(function(error) {
		console.error('error inside search.controller.js', error)
		res.status(404).send(error)
	})
}