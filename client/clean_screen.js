


export default function cleanScreen(){
  var riquadro= document.getElementsByClassName("riquadro");
  for (var i=0; i<36; i++){
    riquadro[i].style.padding = "";
    riquadro[i].childNodes[0].style.border ="";
    riquadro[i].childNodes[0].style.backgroundColor = "";
    riquadro[i].childNodes[0].style.opacity = "1";
    riquadro[i].onclick = null;
  }
}
