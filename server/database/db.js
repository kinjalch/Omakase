var mysql = require('mysql');
var config = require('../knexfile.js')
var knex = require('knex')(config[env])







module.exports = knex;

knex.migrate.latest([config])