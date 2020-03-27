import transition from './transition.js'


export default function setSelection(sock,alreadySelected,playerSelection){
  var riquadro= document.getElementsByClassName("riquadro");

  for (var i=0; i<36; i++){
    riquadro[i].number = i+1;
    riquadro[i].clicked = false;

    if(!alreadySelected.includes(i+1)){
      riquadro[i].onclick = function(){

        if(!this.clicked) {
          if(playerSelection.noneOrOneElement()) {
            transition(this,"red");
            playerSelection.one = this.number;
            sock.emit('newGuess',this.number);
            console.log("qua");
          }

          else{
            if(!playerSelection.isFull()){
            transition(this,"red");
              playerSelection.two = this.number;
              sock.emit('newGuess',this.number);
              sock.emit('selectedCards',[playerSelection.one, playerSelection.two]);
            }
          }
        }
      }
    }
  }
  
  const div = document.querySelector('#tuo_turno');
  const p = document.createElement("p");
  p.innerHTML = "TOCCA A TE";
  div.appendChild(p);
}


