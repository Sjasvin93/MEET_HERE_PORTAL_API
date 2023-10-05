const knex = require('knex');
const knexConfig = require('../../knexfile');

// Set up the database connection using the development configuration
const db = knex(knexConfig.development);

module.exports = db;