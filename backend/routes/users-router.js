const usersRouter = require('express').Router();
const { getAllUsers, postUser, patchUser } = require('../controllers/users');

usersRouter
  .route('/')
  .get(getAllUsers)
  .post(postUser);

usersRouter.route('/:user_id').patch(patchUser);

module.exports = usersRouter;
