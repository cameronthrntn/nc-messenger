const { connection } = require('../db/connection');

exports.selectAllUsers = () => {
  return connection
    .select('*')
    .from('users')
    .returning('*')
    .then(response => {
      return response;
    });
};
