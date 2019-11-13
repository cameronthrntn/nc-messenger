const messagesRouter = require('express').Router();
const { getAllMessages, postMessage } = require('../controllers/messages');

messagesRouter
  .route('/')
  .get(getAllMessages)
  .post(postMessage);

module.exports = messagesRouter;
