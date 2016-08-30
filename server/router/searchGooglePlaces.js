var auth = require('.Auth');
var https = require('https');
var httpmodule require('/.httpModule');

var parameters = {
	key: auth.API_KEY,
	query: "pad thai, Santa Monica",
	language: 'en',
	location: [34.024212, -118.496475],
	types: ['restaurant'],
	radius: 15
};


function searchText(format){
	function searchData(parameters, callback){
		parameters.query = parameters.query || "restaurant";

		var options = {
			hostname: "maps.googleapis.com",
			path:'maps/api/place/textsearch' + format + '?' + querystring.stringify(parameters)
		}
		var request = https.request(options, new httpmodule(format = 'json', callback));
		request.on("error", function(error){
			callback(new Error(error));
		});
		request.end();
	};
	return searchData;
};

var searchFunction = new searchText(auth.FORMAT);

module.exports ={
	searchText: function (callback){
		searchFunction(parameters, callback);
	}
};