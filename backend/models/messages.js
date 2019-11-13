const connection = require("../db/connection");

exports.insertMessage = body => {
  return connection
    .insert(body)
    .into("messages")
    .returning("*");
};
