const { selectAllMessages, insertMessage } = require('../models/messages');

exports.getAllMessages = (req, res, next) => {
  selectAllMessages().then(messages => {
    res.status(200).send({ messages });
  });
};

exports.postMessage = (req, res, next) => {
  insertMessage(req.body).then(message => {
    res.status(201).send({ message: message[0] });
  });
};
