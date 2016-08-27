
exports.up = function(knex, Promise) {
  return Promise.all([


  		knex.schema.createTable('users', function(table) {
  			table.increments('uid').primary();
  			table.string('FB_token');
  		}),

  		knex.schema.createTable('UsersDishes', function(table) {
  			table.increments('id').primary;
  			table.integer('dish_id');
  			table.integer('FB_token_id')
  				.references('uid')
  				.inTable('users')
  		}),

  		knex.schema.createTable('Dishes', function(table) {
  			table.createTable('uid');
  			table.createTable('dish_name');
  		})
  	
  	])
};

exports.down = function(knex, Promise) {
  
};
