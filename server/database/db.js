var mysql = require('mysql');
console.log('dirname is ', __dirname);
var config = require(__dirname + '/../../knexfile.js')

var env = 'development'
var knex = require('knex')(config[env])







module.exports = knex;

knex.ensureSchema = function() {
	return Promise.all([
		knex.schema.hasTable('Users').then(function(exists) {
			if (!exists) {
  			 knex.schema.createTable('Users', function(table) {
  				table.integer('id').primary();
  				table.string('user');
  			}).then(function(table) {
  				console.log('UsersTable has been created', table)
  			})
  		}
  	}),
  	knex.schema.hasTable('Resturants').then(function(exists) {
			if (!exists) {
  			 knex.schema.createTable('Resturants', function(table) {
  				table.integer('id').primary();
  				table.string('resturant_name');
  				table.string('address');
  				table.integer('zipcode');
  				table.string('imageUrl');
  			}).then(function(table) {
  				console.log('ResturantsTable has been created', table)
  			})
  		}
  	}),
  	knex.schema.hasTable('Locations').then(function(exists) {
			if (!exists) {
  			 knex.schema.createTable('Locations', function(table) {
  				table.integer('id').primary();
  				table.string('location_name');
  			}).then(function(table) {
  				console.log('LocationsTable has been created', table)
  			})
  		}
  	}),
  	knex.schema.hasTable('Dishes').then(function(exists) {
			if (!exists) {
  			 knex.schema.createTable('Dishes', function(table) {
  				table.integer('id').primary();
  				table.string('dish_name');
  				table.integer('voteCount');
  				table.integer('resturant_id').references('id').inTable('Resturants');
  				table.integer('location_id').references('id').inTable('Locations');
  			}).then(function(table) {
  				console.log('DishesTable has been created', table)
  			})
  		}
  	}),
  	knex.schema.hasTable('UsersDishes').then(function(exists) {
			if (!exists) {
  			 knex.schema.createTable('UsersDishes', function(table) {
  				table.integer('id').primary();
  				table.integer('dish_id').references('id').inTable('Dishes');
  				table.integer('user_id').references('id').inTable('Users');
  			}).then(function(table) {
  				console.log('UsersTable has been created', table)
  			})
  		}
  	})


  	


  	])
}

knex.deleteEverything = function () {
 return knex('Users').truncate()
    .then(function () {
      return knex('Resturants').truncate();
    })
     .then(function () {
      return knex('Locations').truncate();
    })
      .then(function () {
      return knex('Dishes').truncate();
    })
      .then(function () {
      return knex('UsersDishes').truncate();
    }).then(function() {
      console.log("everything wiped")
 }
 )}