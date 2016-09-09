var request = require('request');

exports.photo = {
	postPhoto: postPhoto
}

 function postPhoto(req, res) {
   //console.log("req.image inside of postPhoto: ", req.body.image);
   console.log("inside of postPhoto");
  request.post({
    headers: {'Authorization': 'Bearer 0e65893d52373958c6c062088a3f100d3a6cfda7'},
    url: 'https://api.imgur.com/3/image/',
    body: req.body.image
  }, function(error, reponse, body) {
		console.log("inside of if statement for postPhoto");
		if (error) {
			res.status(500).send(error);
		}
		else {
			console.log("response inside of postPhoto: ", JSON.parse(body));
			res.send(JSON.parse(body));
		}
	});
}
