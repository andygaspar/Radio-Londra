function receive(game){

    var play = require('./gameLogic');
    
    for(var i= 0; i<game._numPlayers; i++){
        game._playersList[i].sock.on('messaggio_cifrato',(codedMessage) =>{
            game.setCodedMessage(codedMessage);
            play(game);
        });

        game._playersList[i].sock.on('selectedCards',(selectedCards) =>{
            game.cardSelection(selectedCards);
            var now = new Date().getTime();
            while(new Date().getTime() < now + (700)){};
            game.graphix.sendWriteGuessed(selectedCards);
            play(game);
        });

        game._playersList[i].sock.on('newGuess',(guess) =>{
            game.graphix.sendNewSelection(guess);
        });

        game._playersList[i].sock.on('disconnect',() =>{
            game._server.emit("message","Un amico siè disconnesso<br>occorre ricaricare la partita");
        });
        
    }   
}

module.exports = receive;