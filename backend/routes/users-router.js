const usersRouter = require('express').Router();
const { getAllUsers, postUser, patchUser } = require('../controllers/users');

usersRouter
  .route('/')
  .get(getAllUsers)
  .post(postUser)
  .patch(patchUser);

module.exports = usersRouter;
