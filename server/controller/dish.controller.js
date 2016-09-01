var dishModel = require('../model/dish.model.js');

exports.dish = {
	postDish: postDish
}

function postDish(req, res) {
	dishModel.findDish(req.body)
	.then(function(dish) {
		if (dish) {
			dishModel.incrementVoteCount(req.body)
			res.end('inside postDishController dish already exists and we incremented votecount', dish)
		}  else {
			dishModel.addDishEntry(req.body)
				.then(function(resultRest) {
					res.status(200).send(resultRest)
				})
				.catch(function(err) {
					res.status(500).end('Error inside createRestaurant', err)
				})
		}
	})
	.catch(function(err) {
		res.status(500).end('inside postDishController error in findDish', err)
	})
}
