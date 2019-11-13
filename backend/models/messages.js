const { connection } = require('../db/connection');

exports.insertMessage = body => {
  console.log('model');

  return connection
    .insert(body)
    .into('messages')
    .returning('*');
};
exports.selectAllMessages = () => {
  return connection('messages')
    .leftOuterJoin('users', 'users.user_id', 'messages.user_id')
    .select('*')
    .orderBy('posted', 'asc');
};
