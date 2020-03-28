


export default {

    write: function(text) {
        var parent = document.querySelector('#messaggio');
        const el= document.createElement('p');
        el.setAttribute("class","testo_chat");
        el.innerHTML = text;
        parent.appendChild(el);
        var chatLines = document.querySelectorAll('.testo_chat');
        if(chatLines.length>=10) chatLines[0].remove();
        parent.scrollTop = parent.scrollHeight; 
     },

    setSendEvent: function(sock){
        var chatSend =document.querySelector('#chat_box');
        chatSend.addEventListener('submit',(e)=>{
            e.preventDefault();
            const input = document.querySelector('#chat');
            const text = input.value;
            input.value = '';
            sock.emit('message',text);
        });
    }

} 



 