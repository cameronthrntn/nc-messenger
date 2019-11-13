const apiRouter = require('express').Router();
const usersRouter = require('./users-router');
const messagesRouter = require('./messages-router');

apiRouter.route('/').get((req, res, next) => {
  res.send({ found: 'here' });
});

apiRouter.use('/users', usersRouter);
apiRouter.use('/messages', messagesRouter);

module.exports = apiRouter;
