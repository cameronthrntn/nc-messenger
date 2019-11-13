const { PORT = 9090 } = process.env;
const socketPort = 8000;
const { app } = require('./app');
const socket = require('socket.io')();

socket.on('connection', client => {
  client.on('suscribeToTimer', interval => {
    console.log(`client is subscribing to timer with interval ${interval}`);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });
});

socket.listen(socketPort);
console.log(`listening on port ${socketPort}...`);

app.listen(PORT, () => console.log(`listening on ${PORT}...`));
