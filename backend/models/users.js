const { connection } = require('../db/connection');

exports.insertUser = body => {
  console.log(body);

  return connection
    .insert(body)
    .into('users')
    .returning('*');
};
