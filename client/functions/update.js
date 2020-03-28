


export default function update(lists){
  const barraGiocatori = document.querySelector('#players');

  while (barraGiocatori.firstChild) {
    barraGiocatori.removeChild(barraGiocatori.lastChild);
  }
  
  for (var i=0; i<lists.names.length;i++){
    const div = document.createElement("div");
    div.setAttribute("class","player");
    barraGiocatori.appendChild(div);

    if(i == lists.current) div.style.backgroundColor= "blue";
    else div.style.backgroundColor= "";

    const image = document.createElement("img");
    image.setAttribute("id","imgPiccola");
    
    switch(i){
      case lists.speaker:
        image.src = "img/ally.jpg";
        break;
      case lists.nazi:
        image.src = "img/nazi.jpg";
        break;
      default:
        image.src = "";
        break;
    }


    div.appendChild(image);

    const text=document.createElement("p");
    text.setAttribute("class","namePlayer");
    text.innerHTML = lists.scores[i]+" "+lists.names[i];
    div.appendChild(text);

  }
}
