

export default function askMessage(sock,carte) {

  var popup = document.querySelector(".pagina");
  const el= document.createElement('form');
  el.setAttribute("id","box_iniziale");
  popup.appendChild(el);

  const imageOne = document.createElement("img");
  imageOne.setAttribute("id","carta_sx");
  imageOne.src = "img/"+carte.uno+".jpg";
  el.appendChild(imageOne);

  const imageTwo = document.createElement("img");
  imageTwo.setAttribute("id","carta_dx");
  imageTwo.src = "img/"+carte.due+".jpg";
  el.appendChild(imageTwo);

  const title = document.createElement("p");
  title.setAttribute("id","title");
  title.style.textAlign = "center";
  title.innerHTML = "MESSAGGIO IN CODICE";
  el.appendChild(title);

  const codedMessage = document.createElement("input");
  codedMessage.setAttribute("id","inputName");
  codedMessage.setAttribute("autocomplete","off");
  el.appendChild(codedMessage);

  const board = document.querySelector("#board");
  board.style.opacity = "0.7";

  document.querySelector('#box_iniziale').addEventListener('submit',(e)=>{
    e.preventDefault();
    const input = document.querySelector('#inputName');
    var messaggio = input.value;
    input.value = '';
    sock.emit('messaggio_cifrato',messaggio);
    el.remove();
    board.style.opacity = "1";
  });
}
