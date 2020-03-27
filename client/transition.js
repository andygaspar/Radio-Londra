export default function transition(elem,color){
    elem.childNodes[0].style.transition = "border 0.5s linear 0s";
    elem.childNodes[0].style.border ="8px solid "+color;
    elem.childNodes[0].style.backgroundColor = color;
    elem.childNodes[0].style.opacity = "0.4s";
    elem.childNodes[0].style.width = "69px";
    elem.childNodes[0].style.transition = "width 0.5s linear 0s";
    elem.childNodes[0].style.transition = "opacity 0.5s linear 0s";
    elem.childNodes[0].style.transition = "border 0.5s linear 0s";
    
  }