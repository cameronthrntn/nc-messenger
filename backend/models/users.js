const { connection } = require('../db/connection');

exports.insertUser = body => {
  return connection
    .insert(body)
    .into('users')
    .returning('*');
};

exports.selectAllUsers = () => {
  return connection
    .select('*')
    .from('users')
    .returning('*')
    .then(response => {
      return response;
    });
};

exports.updateUser = ({ user_id, username, avatar }) => {
  return connection('users')
    .where({ user_id })
    .modify(query => {
      if (username) query.update({ username });
      if (avatar) query.update({ avatar });
    })
    .returning('*')
    .then(res => res);
};
