const offer = socket => {
  // send the user second joined room
  socket.on('offer', (offer, roomName) => {
    socket.to(roomName).emit('offer', offer);
  });
};

export default offer;
