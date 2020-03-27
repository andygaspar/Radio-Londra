const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const RadioLondra = require('./radio_londra');
const Giocatore = require('./giocatore');

const app = express();

const clientPath = `${__dirname}/../client`;
console.log(`Serving static from ${clientPath}`);

app.use(express.static(clientPath));
const server = http.createServer(app);
const io = socketio(server);

let waitingPlayer = null;
var giocatori = [];



io.on('connection', (sock) => {
  sock.on('playerName',(nome)=>{
    giocatori.push(new Giocatore(sock,nome));

    if(giocatori.length==3) {
      var gioco = new RadioLondra(giocatori,io);
      gioco.setGame();
      gioco.startGame();
    }
    else {
        giocatori.forEach((s) => {
          s.sock.emit('message',"IN ATTESA DI ALTRI GIOCATORI");
      });
    }
  });

//Chat
  sock.on('message',(text) =>{
    io.emit('message',sock.player.nome+":\xa0\xa0\xa0"+text);
  });
});






server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(process.env.PORT || 8080);