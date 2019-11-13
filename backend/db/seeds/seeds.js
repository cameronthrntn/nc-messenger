const { messageData, userData } = require('../data/index');

exports.seed = function(knex) {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      return knex
        .insert(userData)
        .into('users')
        .returning('*');
    })
    .then(res => {
      return knex
        .insert(messageData)
        .into('messages')
        .returning('*');
    })
    .catch(err => {
      console.log(err);
    });
};
