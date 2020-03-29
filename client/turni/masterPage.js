
export default function setMaterPage(sock,winValue) {

  var popup = document.querySelector(".pagina");
  const el= document.createElement('form');
  el.setAttribute("id","box_iniziale");
  popup.appendChild(el);

  const text = document.createElement("p");
  text.setAttribute("id","title");
  text.style.textAlign = "center";
  text.innerHTML = "PUNTEGGIO VITTORIA";
  el.appendChild(text);

  const invalido = document.createElement("p");
  invalido.setAttribute("id","title");
  invalido.style.textAlign = "center";
  invalido.innerHTML = "Inserisci un numero fra 5 e 14";

  const numPlayerInput = document.createElement("input");
  numPlayerInput.setAttribute("id","inputName");
  numPlayerInput.setAttribute("autocomplete","off");
  el.appendChild(numPlayerInput);

  const board = document.querySelector("#board");
  board.style.opacity = "0.7";


  const startButton = document.createElement("input");
  startButton.setAttribute("type","button");
  startButton.setAttribute("id","startButton");
  startButton.setAttribute("value","INIZIA");


  const playersListText = document.createElement("p");
  playersListText.setAttribute("id","title");
  playersListText.style.textAlign = "center";

  var numConnectedPlayers = 1;


  el.addEventListener('submit',(e)=>{
    e.preventDefault();
    const input = document.querySelector('#inputName');
    if(winValue.isValid(input.value)){
      winValue.setWinValue(input.value);
      numPlayerInput.remove();
      invalido.remove();
      text.innerHTML = "ATTENDI GIOCATORI E PREMI INIZIA";
      el.appendChild(startButton);
      el.appendChild(playersListText);
    }
    else{
      input.value = "";
      el.appendChild(invalido);
    }
    
  });


  startButton.addEventListener('click',(e)=>{
    e.preventDefault();
    if(numConnectedPlayers > 2) {
      sock.emit('startGame',winValue.value);
      el.remove();
      board.style.opacity = "1";
    }
   
  });


  sock.on("playerConnected",(playerConnected) =>{
    var plList = "";
    for(var i in playerConnected) plList += playerConnected[i]+"<br>";
    playersListText.innerHTML = plList;
    numConnectedPlayers += 1;

  });


}
