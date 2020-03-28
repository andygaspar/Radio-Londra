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

var giochi = [];
var giocatori = [];
var master = null;

var masterInAttesa = false;



io.on('connection', (sock) => {

  sock.on('playerName',(nome)=>{

      giocatori.push(new Giocatore(sock,nome,giocatori.length));

      if(!masterInAttesa) {
        masterInAttesa = true;
        master = sock;
        master.emit('masterMessage');
      }
  
      else{
        var plNameList = [];
        for(var i=0; i<giocatori.length ;i++) plNameList.push(giocatori[i].nome);
        master.emit("playerConnected",plNameList);
      }
  
  
      if(giocatori.length > 0){
        var giocatoriInGioco="";
        for(var i=0; i<giocatori.length ;i++) giocatoriInGioco+= " "+giocatori[i].nome;
        giocatoriInGioco += " sono connessi";
        sock.emit('message',giocatoriInGioco);
      }
  
     
      giocatori.forEach((s) => {
        s.sock.emit('message',nome+" è connesso");
      });
  



  });


  sock.on("startGame", (winValue) => {
    var gioco = new RadioLondra();
    giochi.push(gioco);
    gioco.setGame(giocatori,io,winValue);
    gioco.startGame();
    masterInAttesa = false;
    giocatori = [];
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