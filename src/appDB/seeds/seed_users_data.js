const bcrypt = require('bcrypt');
exports.seed = async function (knex) {
  // Deletes ALL existing entries and resets the primary key sequence
  return await knex("users")
    .del()
    .then(async function () {
      // Inserts seed entries
      return await knex("users").insert([
        { id: 1, username: "wolverine99", email: "wolvi@gmail.com", password: bcrypt.hash("aezakmi", 10) },
        { id: 2, username: "ethanxDBZ458", email: "ethanx458@gmail.com", password: bcrypt.hash("Jascvf@555", 10) },
        { id: 3, username: "godjiraPowerx", email: "godjirax0000@gmail.com", password: bcrypt.hash("monaLisa", 10) },
      ]);
    });
};

exports.down = function (knex) {
  // No need to implement the down function for this example.
};