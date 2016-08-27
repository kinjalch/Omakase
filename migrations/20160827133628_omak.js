
exports.up = function(knex, Promise) {
  return Promise.all([


  		knex.schema.createTable('Users', function(table) {
  			table.increments('uid').primary();
  			table.string('user');
  		}),

  		knex.schema.createTable('UsersDishes', function(table) {
  			table.integer('uid').primary();
  			table.integer('dish_id')
  				.unsigned()
  				.references('uid')
  				.inTable('Dishes')
  			table.integer('user_id',11)
  				.unsigned()
  				.references('uid')
  				.inTable('Users');
  		}),

  		knex.schema.createTable('Resturants', function(table) {
  			table.integer('uid').primary()
  			table.string('resturant_name');
  			table.string('address');
  			table.integer('zipcode');
  			table.string('imageUrl')
  		}),

  		knex.schema.createTable('Locations', function(table) {
  			table.integer('uid').primary();
  			table.string('location_name');
  		}),

  		knex.schema.createTable('Dishes', function(table) {
  			table.integer('uid').primary();
  			table.string('dish_name');
  			table.integer('voteCount');
  			table.integer('resturant_id')
  				.unsigned()
  				.references('uid')
  				.inTable('Resturants');
  			table.integer('location_id')
  				.unsigned()
  				.references('uid')
  				.inTable('Locations');
  		})


  	])
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('Users'),
  knex.schema.dropTable('UsersDishes'),
  knex.schema.dropTable('Dishes'),
  knex.schema.dropTables('Locations'),
  knex.schema.dropTables('Resturants')

};
