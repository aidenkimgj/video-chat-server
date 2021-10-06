export default join = socket => {
  socket.on('join', roomName => {
    socket.join(roomName);
    // send the user already joined room
    socket.to(roomName).emit('welcome');
  });
};
