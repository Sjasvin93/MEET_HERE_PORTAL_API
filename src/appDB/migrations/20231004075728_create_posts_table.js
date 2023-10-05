exports.up = function (knex) {
    return knex.schema.createTable("posts", function (table) {
        table.increments("id").primary();
        table.integer("user_id").unsigned().notNullable();
        table.string("title").notNullable();
        table.text("content").notNullable();
        table.timestamps(true, true); // Creates "created_at" and "updated_at" columns

        table
        .foreign("user_id")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("posts");
};