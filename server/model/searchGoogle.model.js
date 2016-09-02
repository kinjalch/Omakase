var auth = require('./../../.auth');
var request = require("request");

var searchGoogleModel = module.exports;

searchGoogleModel.getRestaurantList = function(params) {
    var query = params.restaurant + params.location;

    var options = {
        method: 'GET',
        url: 'https://maps.googleapis.com/maps/api/place/textsearch/json',
        qs: {
            query: query,
            key: 'AIzaSyBKzBInzbbwqbFWDpH5aqy8I73k3j4XiRM',
            type: 'restaurant',
            fields: 'results (formatted_address, name, opening_hours/open_now, photos)'
        }
    };

    request(options, function(error, response, body) {
        if (error) {
            console.log('Error inside searchController inside request:', error);
        } else {
            console.log('Success inside searchController inside request: body is', body);
            return response;
        }
    });
}
