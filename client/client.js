import endGame from './turni/endGame.js'
import setSelection from './turni/turnoScegli.js'
import askName from './turni/popupName.js'
import askMessage from './turni/alleato.js'
import setMasterPage from './turni/masterPage.js'

import setPage from './functions/setPage.js'
import update from './functions/update.js'
import imageUpdate from './functions/imageUpdate.js'


import PlayerSelection from './objs/PlayerSelection.js'
import WinValue from './objs/WinValue.js'


const sock = io();

askName(sock);

setPage(sock);


var playerSelection = new PlayerSelection();
var winValue =  new WinValue();

sock.on('masterMessage',function() {setMasterPage(sock,winValue)});

sock.on('update',function(lists){update(lists)});

sock.on('indovinaCarte',function(alreadySelected){
  playerSelection.empty();
  setSelection(sock,alreadySelected,playerSelection);
});

sock.on('pulisci_schermo',function(){imageUpdate.cleanScreen()});

sock.on('chiedi_messaggio',function(carte){askMessage(sock,carte)});

sock.on('mess_cif', (messaggio) =>{
  document.querySelector('#messaggio_cifrato').innerHTML = messaggio;
});

sock.on("newCardSelected",function(card){ 
  var riquadro= document.getElementsByClassName("riquadro");
  imageUpdate.setTransition(riquadro[card-1],"red");
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


