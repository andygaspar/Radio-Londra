import chat from '../chat/chat.js'

export default function setPage(sock){

  sock.on('message',function(text) {chat.write(text)});

  chat.setSendEvent(sock)

  var board = document.querySelector("#board");
  for(var n=0;n<9;n++){

    const nested = document.createElement("div");
    nested.setAttribute("class","nestedBoard");
    board.appendChild(nested);

    for (var i=n*4 + 1;i< n*4 + 5;i++) {

      const el= document.createElement('a');
      el.setAttribute("class","riquadro");
      nested.appendChild(el);

      const image = document.createElement("img");
      
      if(i % 2 == 1) image.setAttribute("id","imageSx");
      else image.setAttribute("id","imageDx");
      
      image.src = "img/"+i+".jpg";
      el.appendChild(image);

    }
  }
}
