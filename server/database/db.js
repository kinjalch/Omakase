var mysql = require('mysql');
console.log('dirname is ', __dirname);
var config = require(__dirname + '/../../knexfile.js')

var env = 'development'
var knex = require('knex')(config[env])







module.exports = knex;

knex.migrate.latest([config])