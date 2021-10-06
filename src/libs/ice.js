export default ice = socket => {
  // Exchange information each other through this
  socket.on('ice', (ice, roomName) => {
    socket.to(roomName).emit('ice', ice);
  });
};
