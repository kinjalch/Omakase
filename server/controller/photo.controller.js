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
  });
}
