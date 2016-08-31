var dishModel = require('../model/dish.model.js');

console.log('we are in dishController')
exports.dish = {
	postDish: postSimple
}

//POST DISH IS NOW FIND SIMPLE
function postSimple(req, res) {
	console.log('we are inside postSimple')
	console.log('req . body inside postSimple', req.body)
		dishModel.findSimple(req.body)
		.then(function(dish) {
			if (dish) {
				console.log('inside postDishController inside postSimple dish already exists',dish)
				dishModel.incrementVoteCount(req.body)
				res.end('inside postDishController dish already exists and we incremented votecount', dish)
			}  else {
				//insert createDish function here
				console.log('inside postDishController dish does not exist')
				console.log('inside postDishController insert function goes here')
			}
		})
		.catch(function(err) {
			console.log('inside postDishController error in findSimple', err)
			res.end('inside postDishController error in findSimple', err)
		})
}
// function postDish(req,res) {
// 	console.log('we are inside postDish')
// 	console.log('req . body inside postdish', req.body)
// 	dishModel.findDish(req.body)
// 		.then(function(dish) {
// 			if (dish) {
// 				console.log('Dish already exists')
// 				res.end('Dish already exists') //return dish and increment votecount
// 				dishModel.incrementVoteCount() 
// 				.then(function(result) {
// 					console.log('inside postDish the result of incremenation is', result)
// 					res.send(result)
// 				})
// 			}  else {
// 				dishModel.createDish(req.body)
// 				.then(function(result) {
// 					console.log('result inside dishController', result)
// 					res.send(result)
// 				})
// 				.catch(function(err) {
// 					console.log('error inside createDish', err)
// 					res.end('error inside creatDish',err)
// 				})
// 			}
// 		})
// 		.catch(function(err) {
// 			console.error('error inside findDish inside dish.controller', err)
// 			res.end('error inside findDish inside dish.controller',err)
// 		})
// }


