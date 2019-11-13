const { connection } = require('../db/connection');

exports.selectAllMessages = () => {
  return connection('messages')
    .fullOuterJoin('users', 'users.user_id', 'messages.user_id')
    .select('*')
    .orderBy('posted', 'asc');
};
