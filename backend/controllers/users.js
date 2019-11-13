const { selectAllUsers, insertUser } = require('../models/users');

exports.getAllUsers = (req, res, next) => {
  selectAllUsers().then(users => {
    res.status(200).send({ users });
  });
};

exports.postUser = (req, res, next) => {
  insertComment(req.body).then(user => {
    res.status(201).send({ user: user[0] });
  });
};
