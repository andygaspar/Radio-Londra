function receive(game){

    var play = require('./gameLogic');
    
    for(var i= 0; i<game._numPlayers; i++){
        game._playersList[i].sock.on('messaggio_cifrato',(codedMessage) =>{
            game.setCodedMessage(codedMessage);
            play(game);
        });

        game._playersList[i].sock.on('selectedCards',(selectedCards) =>{
            game.cardSelection(selectedCards);
            game.graphix.sendWriteGuessed(selectedCards);
            play(game);
        });

        game._playersList[i].sock.on('newGuess',(guess) =>{
            game.graphix.sendNewSelection(guess);
        });

        game._playersList[i].sock.on('disconnect',() =>{
            game._server.emit("message","Un amico si è disconnesso.<br>Occorre ricaricare la partita");
        });
        
    }   
}

module.exports = receive;