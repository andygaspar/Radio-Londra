const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const RadioLondra = require('./server/radio_londra');
const Giocatore = require('./server/giocatore');

const app = express();

const clientPath = `${__dirname}/client`;
console.log(`Serving static from ${clientPath}`);

app.use(express.static(clientPath));
const server = http.createServer(app);
const io = socketio(server);

var giocatori = [];



io.on('connection', (sock) => {


  sock.on('playerName',(nome)=>{
    if(giocatori.length > 0){
      var giocatoriInGioco="";
      for(var i=0; i<giocatori.length ;i++) giocatoriInGioco+= " "+giocatori[i].nome;
      giocatoriInGioco += " sono connessi";
      sock.emit('message',giocatoriInGioco);
    }
    

    giocatori.push(new Giocatore(sock,nome,giocatori.length));

    if(giocatori.length % 3 == 0) {
      giocatori.forEach((s) => {
        s.sock.emit('message',nome+" è connesso")});
      var gioco = new RadioLondra(giocatori,io);
      gioco.setGame();
      gioco.startGame();
      giocatori = [];
    }
    else {
        giocatori.forEach((s) => {
          s.sock.emit('message',nome+" è connesso");
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