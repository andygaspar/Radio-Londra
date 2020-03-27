export default function transition(elem,color){
    elem.style.transition = "padding 0.5s linear 0s";
    elem.style.padding= "4px";
    elem.childNodes[0].style.transition = "border 0.5s linear 0s";
    elem.childNodes[0].style.border ="4px solid "+color;
    elem.childNodes[0].style.backgroundColor = color;
    elem.childNodes[0].childNodes[0].style.transition = "border 0.5s linear 0s";
    elem.childNodes[0].childNodes[0].style.opacity = "0.2";
  }