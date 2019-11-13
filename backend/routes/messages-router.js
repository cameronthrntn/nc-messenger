const messagesRouter = require('express').Router();
const { getAllMessages } = require('../controllers/messages');

messagesRouter.route('/').get(getAllMessages);

module.exports = messagesRouter;
