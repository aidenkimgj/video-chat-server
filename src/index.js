import express from 'express';
import cors from 'cors';
import http from 'http';
import socketIo from 'socket.io';
import { answer, ice, join, offer } from './libs';

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
  join(socket);
  offer(socket);
  answer(socket);
  ice(socket);
});

export default app;
