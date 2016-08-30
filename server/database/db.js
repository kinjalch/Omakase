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
  				table.increments('id').primary();
          table.string('FB_id', 50); //for FB auth token
          table.string('name');
  			}).then(function(table) {
  				console.log('UsersTable has been created', table)
  			})
  		}
  	}),
  	knex.schema.hasTable('Resturants').then(function(exists) {
			if (!exists) {
  			 knex.schema.createTable('Resturants', function(table) {
  				table.increments('id').primary();
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
  				table.increments('id').primary();
  				table.string('location_name');
  			}).then(function(table) {
  				console.log('LocationsTable has been created', table)
  			})
  		}
  	}),
  	knex.schema.hasTable('Dishes').then(function(exists) {
			if (!exists) {
  			 knex.schema.createTable('Dishes', function(table) {
  				table.increments('id').primary();
  				table.string('dish_name');
  				table.integer('voteCount');
  				table.integer('resturant_id').unsigned().references('id').inTable('Resturants');
  				table.integer('location_id').unsigned().references('id').inTable('Locations');
  			}).then(function(table) {
  				console.log('DishesTable has been created', table)
  			})
  		}
  	}),
  	knex.schema.hasTable('UsersDishes').then(function(exists) {
			if (!exists) {
  			 knex.schema.createTable('UsersDishes', function(table) {
  				table.increments('id').primary();
  				table.integer('dish_id').unsigned().references('id').inTable('Dishes');
          table.integer('user_id').unsigned().references('id').inTable('Users');
  			}).then(function(table) {
  				console.log('UsersTable has been created', table)
  			})
  		}  else {
  			console.log('UsersDishes table already exists')
  		}
  	})

  	])
}

knex.deleteEverything = function () {
 return knex('Users').truncate()
    .then(function () {
      return knex('UsersDishes').truncate();
    })
     .then(function () {
      return knex('Dishes').truncate();
    })
      .then(function () {
      return knex('Resturants').truncate();
    })
      .then(function () {
      return knex('Locations').truncate();
    }).then(function() {
      console.log("everything wiped")
 }
 )}