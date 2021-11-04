import express from 'express';
import cors from 'cors';
import http from 'http';
import socketIo from 'socket.io';
import { answer, ice, join, offer } from './libs';
import root from './router/api/root';

const app = express();

const corsOption = {
  origin: true,
  credentials: true,
  preFlightContinue: true,
};

app.use(cors(corsOption));
app.use(root);

const httpServer = http.createServer(app);
const io = socketIo(httpServer);

io.on('connection', socket => {
  socket.onAny(event => {
    console.log(`Sockets Event: ${event}`);
  });
  console.log('hello');
  socket.on('join', roomName => {
    console.log('됐다');
    socket.join(roomName);
    // send the user already joined room
    socket.to(roomName).emit('welcome');
  });
  offer(socket);
  answer(socket);
  ice(socket);
});

export default app;
