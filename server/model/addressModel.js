var request = require('request');

var addressModel = module.exports;

addressModel.convertAddress = function(params, res) {
  console.log(params);
  var options = {
    method: 'GET',
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    qs: {
        query: '',
        key: 'AIzaSyBKzBInzbbwqbFWDpH5aqy8I73k3j4XiRM'
    }
  };

  request(options, function(error, response, body) {
    if(error) {
      console.log(error)
      res.status(500).send(error);
    } else {
      console.log('body inside addressModel.js', body)
      res.send(body);
    }
  });
}
