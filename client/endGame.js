

export default function endGame(sock,winners) {

  var popup = document.querySelector(".pagina");
  const el= document.createElement('form');
  el.setAttribute("id","box_iniziale");
  popup.appendChild(el);

  const title = document.createElement("p");
  title.setAttribute("id","title");
  title.style.textAlign = "center";
  title.innerHTML = "Vincitori";
  el.appendChild(title);

  for(var i=0; i<winners.length; i++ ){
    const title = document.createElement("p");
    title.setAttribute("id","title");
    title.style.textAlign = "center";
    title.innerHTML = winners[i];
    el.appendChild(title);
  }



}
