const { connection } = require('../db/connection');

exports.insertUser = body => {
  return connection
    .insert(body)
    .into('users')
    .returning('*');
}

exports.selectAllUsers = () => {
  return connection
    .select('*')
    .from('users')
    .returning('*')
    .then(response => {
      return response;
    });
};
