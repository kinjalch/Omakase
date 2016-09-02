var searchGooglePlacesModel = require('../model/searchGooglePlaces.model.js');

exports.searchGooglePlaces = {
	getRestaurantList: getRestaurantList
}

function getRestaurantList(req, res) {
	searchGooglePlacesModel.getRestaurantList(req.body)
	.then(function(result) {
		res.status(200).send(result)
	})
	.catch(function(err) {
		res.status(500).end('Error in getRestaurantList', err)
	})
}

