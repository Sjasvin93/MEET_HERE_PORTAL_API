exports.seed = async function (knex) {
  // Deletes ALL existing entries and resets the primary key sequence
  return await knex("posts")
    .del()
    .then(async function () {
      // Inserts seed entries
      return await knex("posts").insert([
        { id: 1, user_id: 1, title: "First Post", content: "This is the content of the first post." },
        { id: 2, user_id: 2, title: "Second Post", content: "This is the content of the second post." },
        { id: 3, user_id: 3, title: "Third Post", content: "This is the content of the third post." },
      ]);
    });
};

exports.down = function (knex) {
  // No need to implement the down function for this example.
};
