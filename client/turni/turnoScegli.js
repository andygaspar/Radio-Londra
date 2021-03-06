import imageUpdate from '../functions/imageUpdate.js'
import PlayerSelection from '../objs/PlayerSelection.js';


export default function setSelecstion(sock,alreadySelected,numCardsToGuess){

  var playerSelection = new PlayerSelection(numCardsToGuess);

  var riquadro= document.getElementsByClassName("riquadro");
  const div = document.querySelector('#tuo_turno');
  const tuoTurno = document.createElement("p");
  tuoTurno.innerHTML = "TOCCA A TE";
  div.appendChild(tuoTurno);

  for (var card=0; card<36; card++){
    riquadro[card].number = card;
    riquadro[card].clicked = false;

    if(!alreadySelected.includes(card)){
      riquadro[card].onclick = function(){

        if(!this.clicked  && !playerSelection.isComplete()) {
          this.clicked = true;
          if(!playerSelection.isComplete()) {
            imageUpdate.setTransition(this,"red");
            playerSelection.add (this.number);
            sock.emit('newGuess',this.number);
          }

          if(playerSelection.isComplete()){
            playerSelection.over();
            sock.emit('selectedCards',[playerSelection.one, playerSelection.two]);
            tuoTurno.remove();         
          }
        }
      }
    }
  }
}


