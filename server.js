const socketIo = require("socket.io")();

socketIo.on('connection', () => {
    console.log('someone connected!');
  });

socketIo.listen(3000);