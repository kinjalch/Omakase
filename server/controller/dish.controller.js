var dishModel = require('../model/dish.model.js');

console.log('we are in dishController')
exports.dish = {
	postDish: postDish
}


function postDish(req, res) {
	console.log('inside dish.controller post reqbody: ',req.body);
	dishModel.postDish(req.body)
	.then(function(data) {
		console.log('data inside dish.controller.js');
		res.status(200).send(data);
	})
	.catch(function(error) {
		console.error('error inside dish.controller.js', error)
		res.status(404).send(error)
	})
}