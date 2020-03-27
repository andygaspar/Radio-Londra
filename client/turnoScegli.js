


export default function setSelection(sock,alreadySelected,playerSelection){
  var riquadro= document.getElementsByClassName("riquadro");

  for (var i=0; i<9; i++){
    riquadro[i].number = i+1;
    riquadro[i].clicked = false;

    if(!alreadySelected.includes(i+1)){
      riquadro[i].onclick = function(){

        if(!this.clicked) {
          if(playerSelection.noneOrOneElement()) {
            this.style.transition = "background 0.5s linear 0s";
            this.style.backgroundColor ="red";
            playerSelection.one = this.number;
            sock.emit('newGuess',this.number);
          }

          else{
            if(!playerSelection.isFull()){
              this.style.transition = "background 0.5s linear 0s";
              this.style.backgroundColor ="red";
              playerSelection.two = this.number;
              sock.emit('newGuess',this.number);
              sock.emit('selectedCards',[playerSelection.one, playerSelection.two]);
            }
          }
        }
      }
    }
  }
  
  const barraGiocatori = document.querySelector('#players');
  const div = document.createElement("div");
  div.setAttribute("class","player");
  div.innerHTML = "TOCCA A TE";
  barraGiocatori.appendChild(div);
}
