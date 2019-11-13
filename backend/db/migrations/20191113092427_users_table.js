exports.up = function(knex) {
  return knex.schema.createTable("users", usersTable => {
    usersTable.increments("user_id").primary();
    usersTable.string("username").notNullable();
    usersTable
      .string("avatar")
      .defaultTo(
        "https://everydaynutrition.co.uk/wp-content/uploads/2015/01/default-user-avatar.png"
      );
  });
};

exports.down = function(knex) {
  return connection.schema.dropTable("users");
};
