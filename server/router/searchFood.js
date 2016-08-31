var connection = require('../connection');

function SearchFood() {
	this.get = function(res) {
		con.query('SELECT MAX(voteCount) FROM Dishes', function(err, result){
			con.release();
			res.send(result);
		});
	};
	this.create = function(searchfood, res) {
		connection.acquire(function(err, con){
			con.query('insert into dishes set?', searchfood, function(err, result){
				con.release();
				if(err){
					res.send({status: 1, message: 'SearchFood creation failed'});
				} else{
					res.send({status: 0, message: 'SearchFood created successfully'})
				}
			});
		});	
	};

}

module.exports = new SeachFood();