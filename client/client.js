import setSelection from './turnoScegli.js'
import askName from './popup_name.js'
import cleanScreen from './clean_screen.js'
import askMessage from './alleato.js'
import setPage from './setPage.js'
import update from './update.js'
import endGame from './endGame.js'
import transition from './transition.js'
import PlayerSelection from './PlayerSelection.js'

const sock = io();

askName(sock);

const writeInChat = (text)=>{
   var parent = document.querySelector('#messaggio');
   const el= document.createElement('p');
   el.setAttribute("class","testo_chat");
   el.innerHTML = text;
   parent.appendChild(el);
   var chatLines = document.querySelectorAll('.testo_chat');
   if(chatLines.length>=10) chatLines[0].remove();
};

const sendMessage = (e)=>{
  e.preventDefault();
  const input = document.querySelector('#chat');
  const text = input.value;
  input.value = '';
  sock.emit('message',text);
};

setPage();

var playerSelection = new PlayerSelection();

sock.on('message',writeInChat);

sock.on('update',function(lists){update(lists)});

sock.on('indovinaCarte',function(alreadySelected){
  playerSelection.empty();
  setSelection(sock,alreadySelected,playerSelection);
});

sock.on('pulisci_schermo',function(){cleanScreen()});

sock.on('chiedi_messaggio',function(carte){askMessage(sock,carte)});

sock.on('mess_cif', (messaggio) =>{
  document.querySelector('#messaggio_cifrato').innerHTML = messaggio;
});

sock.on("newCardSelected",function(card){ 
  var riquadro= document.getElementsByClassName("riquadro");
  transition(riquadro[card-1],"black");
  //riquadro[card-1].onclick = null;
});

sock.on("writeGuessed",function(card){ 
  var riquadro= document.getElementsByClassName("riquadro");
  transition(riquadro[card-1],"green");
  //riquadro[card-1].onclick = null;
});

sock.on("endGame",function(winners){
  endGame(sock,winners);
});

document.querySelector('#chat_box').addEventListener('submit',sendMessage);
