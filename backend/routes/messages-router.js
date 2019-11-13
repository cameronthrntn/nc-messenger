const messagessRouter = require("express").Router();
const { getAllMessages } = require("../controllers/messages");

usersRouter.get(getAllMessages);

module.exports = usersRouter;
