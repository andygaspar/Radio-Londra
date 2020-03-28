
export default {
  setTransition: function(elem,color){
    elem.childNodes[0].style.transition = "border 0.5s linear 0s";
    elem.childNodes[0].style.border ="8px solid "+color;
    elem.childNodes[0].style.backgroundColor = color;
    elem.childNodes[0].style.opacity = "0.4s";
    elem.childNodes[0].style.width = "69px";
    elem.childNodes[0].style.transition = "width 0.5s linear 0s";
    elem.childNodes[0].style.transition = "opacity 0.5s linear 0s";
    elem.childNodes[0].style.transition = "border 0.5s linear 0s";
  },

  cleanScreen: function(){
    var riquadro= document.getElementsByClassName("riquadro");
    for (var i=0; i<36; i++){
      riquadro[i].childNodes[0].style.border ="";
      riquadro[i].childNodes[0].style.backgroundColor = "";
      riquadro[i].childNodes[0].style.opacity = "1";
      riquadro[i].childNodes[0].style.width = "85px";
      riquadro[i].onclick = null;
    }
  }
}
  