var searchModel = require('../model/search.model.js');

exports.search = {
	getDish: getDish,
	getResturants: getResturants
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

function getResturants(req, res) {
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