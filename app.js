const express = require('express');
const http = require('http');


const app = express();
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

  io.on('connection', (socket) => {
    console.log('Hello NEW USER connected');
    // socket.on('disconnect', () => {
    //     console.log('USER BY-BY-BY disconnected');
    //   });
    // socket.on('chat message', (msg) => {
    //     console.log('message USER: ' + msg);
    // });
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
      });
  });
  

server.listen(3000, () => {
  console.log('listening on *:3000');
});