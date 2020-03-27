

export default function setPage(){
  var board = document.querySelector("#board");
  for (var i=1;i<10;i++) {
    const el= document.createElement('a');
    el.setAttribute("class","riquadro");
    board.appendChild(el);
    const image = document.createElement("img");
    image.setAttribute("id","image");
    image.src = "img/"+i+".jpg";
    el.appendChild(image);
  }
}
