const userData = require('../../data/userData.json');

exports.seed = async function (knex) {
  // Deletes ALL existing entries and resets the primary key sequence
   await knex("users").del();
      // Inserts seed entries
      return await knex("users").insert(userData);
};