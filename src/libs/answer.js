export default answer = socket => {
  // send the user already joined room
  socket.on('answer', (answer, roomName) => {
    socket.to(roomName).emit('answer', answer);
  });
};
