const connection = require("../db/connection");

exports.insertMessage = body => {
  return connection
    .insert(body)
    .into("messages")
    .returning("*");
};
exports.selectAllMessages = () => {
  return connection("messages")
    .fullOuterJoin("users", "users.user_id", "messages.user_id")
    .select("*")
    .orderBy("posted", "asc");
};
