


export default function cleanScreen(){
  var riquadro= document.getElementsByClassName("riquadro");
  for (var i=0; i<9; i++){
    riquadro[i].style.backgroundColor = "";
    riquadro[i].onclick = null;
  }
}
