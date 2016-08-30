var dishModel = require('../model/dish.model.js');

console.log('we are in dishController')
exports.dish = {
	postDish: postDish
}




function postDish(req,res) {
	console.log('we are inside postDish')
	console.log('req . body inside postdish', req.body)
	dishModel.findDish(req.body)
		.then(function(dish) {
			if (dish) {
				console.log('Dish already exists')
				res.end('Dish already exists')
				dishModel.incrementVoteCount() //may return promise
				res.end('vote Count increment')
			}  else {
				dishModel.createDish(req.body)
				.then(function(result) {
					console.log('result inside dishController', result)
					res.send(result)
				})
				.catch(fuction(err) {
					console.log('error inside createDish', err)
					res.end('error inside createDish', err)
				})
			}
		})
		.catch(function(err) {
			console.error('error inside findDish', err)
			res.end('error inside findDish', err)
		})
}


