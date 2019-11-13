const { selectAllUsers, insertUser, updateUser } = require('../models/users');

exports.getAllUsers = (req, res, next) => {
  selectAllUsers().then(users => {
    res.status(200).send({ users });
  });
};

exports.postUser = (req, res, next) => {
  insertUser(req.body).then(user => {
    res.status(201).send({ user: user[0] });
  });
};

exports.patchUser = (req, res, next) => {
  updateUser(req.body).then(user => {
    res.send({ user });
  });
};
