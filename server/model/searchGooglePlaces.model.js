var auth = require('.Auth');
var request = require("request");

var searchGooglePlaces = module.exports;

searchGooglePlaces.getRestaurantList = function(params){
  var dish = params.location;
  var location = params.restaurant;
  var fullSearchTerm = restaurant + " in " + location;

  var options = { method: 'GET',
    url: 'https://maps.googleapis.com/maps/api/place/textsearch/xml',
    qs: 
     { query: fullSearchTerm,
       key: 'AIzaSyBKzBInzbbwqbFWDpH5aqy8I73k3j4XiRM\t  ',
       type: 'restaurant',
       opennow: 'true',
       fields: 'results (formatted_address, name, opening_hours/open_now, photos)'   },
    headers: 
     { 'postman-token': '21482a77-ec74-c13a-99c5-06dcad37ba43',
       'cache-control': 'no-cache' },
    body: '{\n  "title": "Michael T\'s GooglePlaces",\n  "content": "I LOVE LAMP!"\n}' };


  request(options, function (error, response, body) {
    if (error) throw new Error(error);
      console.log(body);
      return response;
  });
}




