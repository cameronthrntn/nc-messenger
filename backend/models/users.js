const connection = require("../db/connection");

exports.insertUser = body => {
  return connection
    .insert(body)
    .into("users")
    .returning("*");
};
