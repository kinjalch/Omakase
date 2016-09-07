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
// module.exports = {
//   development: {
//     client: 'mysql',
//     connection: {
//       host: 'mysql.kanadachi.com', //or 127.0.0;.1
//       user: process.env.db_username,
//       password: process.env.db_password,
//       database: 'omakase',
//       charset: 'utf8'
//     },
//     pool: {
//       min: 0,
//       max: 7
//     }
//   }
// }




// module.exports = {

//   development: {
//     client: 'sqlite3',
//     connection: {
//       filename: './dev.sqlite3'
//     }
//   },

//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },

//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }

// };
