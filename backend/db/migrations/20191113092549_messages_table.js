exports.up = function(knex) {
  return knex.schema.createTable('messages', messagesTable => {
    messagesTable.text('body').notNullable();
    messagesTable.timestamp('posted').defaultTo(knex.fn.now());
    messagesTable.increments('message_id');
    messagesTable.integer('user_id').references('users.user_id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('messages');
};
