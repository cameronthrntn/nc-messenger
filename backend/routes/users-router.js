const usersRouter = require('express').Router();
const { getAllUsers, postUser } = require('../controllers/users');

usersRouter
  .route('/')
  .get(getAllUsers)
  .post(postUser);

module.exports = usersRouter;
