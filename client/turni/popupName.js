
export default function askName(sock) {

  var popup = document.querySelector(".pagina");
  const el= document.createElement('form');
  el.setAttribute("id","box_iniziale");
  popup.appendChild(el);

  const title = document.createElement("p");
  title.setAttribute("id","title");
  title.style.textAlign = "center";
  title.innerHTML = "NOME";
  el.appendChild(title);

  const nameInput = document.createElement("input");
  nameInput.setAttribute("id","inputName");
  nameInput.setAttribute("autocomplete","off");
  el.appendChild(nameInput);

  const schermo_opaco= document.createElement('form');
  schermo_opaco.setAttribute("id","opaco");
  popup.appendChild(schermo_opaco);

  const chatBox = document.querySelector("#chat_box");
  chatBox.setAttribute("z-index","11");
  chatBox.setAttribute("position","absolute");

  document.querySelector('#box_iniziale').addEventListener('submit',(e)=>{
    e.preventDefault();
    const input = document.querySelector('#inputName');
    var name = input.value;
    input.value = '';
    sock.emit('playerName',name);
    el.remove();
    schermo_opaco.remove();
  });
}
