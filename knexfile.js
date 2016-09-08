var path = require('path')
require('dotenv').config();

module.exports = {
 development: {
   client: 'postgres',
   connection: {
     host: 'sl-us-dal-9-portal.2.dblayer.com', //or 127.0.0;.1
     user: process.env.db_username,
     password: process.env.db_password,
     port: '10860',
     database: 'omakase',
     charset: 'utf8'
   },
   pool: {
     min: 0,
     max: 7
   }
 }
}
