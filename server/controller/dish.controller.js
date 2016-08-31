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
				console.log('inside postDishController dish does not exist')
				dishModel.createDish(req.body)
					.then(function(resultDish) {
						console.log('result inside dishController createDish', resultDish)
						return resultDish
					})
					.catch(function(err) {
						console.error('Error inside createDish', err)
						res.end('Error inside create Dish', err)
					})
				dishModel.createRestaurant(req.body)
					.then(function(resultRest) {
						console.log('result inside dishController createRestaurant', resultRest)
						return resultRest
					})
					.catch(function(err) {
						console.log('Error inside createRestaurant', err)
						res.end('Error inside createRestaurant', err)
					})
				dishModel.createLocation(req.body)
					.then(function(resultLocation) {
						console.log('result inside dishController createLocation', resultLocation)
						res.send(resultLocation)
					})
					.catch(function(err) {
						console.log('Error inside createLocation', err)
						res.send('Error inside createLocation', err)
					})
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


