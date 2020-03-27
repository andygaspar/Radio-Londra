


export default function update(lists){
  const barraGiocatori = document.querySelector('#players');

  while (barraGiocatori.firstChild) {
    barraGiocatori.removeChild(barraGiocatori.lastChild);
  }
  
  for (var i=0; i<lists.names.length;i++){
    const div = document.createElement("div");
    div.setAttribute("class","player");
    div.innerHTML = lists.scores[i]+" "+lists.names[i];
    //imageOne.src = "img/"+carte.uno+".jpg";
    barraGiocatori.appendChild(div);
  }
}
