const socketIo = require("socket.io")();
const messageString = "message";

socketIo.on('connection', (socket) => {
  console.log("connects")
  socket.on(messageString, message => {
    socketIo.emit(messageString, message)
  })
  });

socketIo.listen(3001);