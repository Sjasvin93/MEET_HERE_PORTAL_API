const postData = require('../../data/postData.json');
exports.seed = async function (knex) {
  // Deletes ALL existing entries and resets the primary key sequence
   await knex("posts").del();
    // Inserts seed entries
    return await knex("posts").insert(postData);
};