import express from 'express';
import cors from 'cors';
import http from 'http';
import socketIo from 'socket.io';
const app = express();

const corsOption = {
  origin: true,
  credentials: true,
  preFlightContinue: true,
};

app.use(cors(corsOption));

const httpServer = http.createServer(app);
const io = socketIo(httpServer);

io.on('connection', socket => {
  socket.on('join', roomName => {
    socket.join(roomName);
    // send the user already joined room
    socket.to(roomName).emit('welcome');
  });
  // send the user second joined room
  socket.on('offer', (offer, roomName) => {
    socket.to(roomName).emit('offer', offer);
  });

  // send the user already joined room
  socket.on('answer', (answer, roomName) => {
    socket.to(roomName).emit('answer', answer);
  });

  socket.on('ice', (ice, roomName) => {
    socket.to(roomName).emit('ice', ice);
  });
});

export default app;
