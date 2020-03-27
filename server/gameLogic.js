
function play(game){


    if(game.turn.isOver()) {

        game.checkEndGame();

        if(!game.isOver){
            game.newTurn();
            game._server.emit('pulisci_schermo');
        }
    }

    if(!game.isOver) {

        game.turn.nextPlayer();
    
        switch(game.turn.currentPlayerIndex) {
            case 0:
                game.graphix.sendUpdateToClients();
                game.turn.speaker.sock.emit('chiedi_messaggio',
                    {uno: game.turn.cardsToGuess.uno, due: game.turn.cardsToGuess.due});
                break;
            
            case 1:
                game.graphix.sendUpdateToClients();
                game._server.emit('mess_cif',"Qui radio Londra: \xa0\xa0\xa0"+game.turn.codedMessage);
                game.turn.currentPlayer.sock.emit("indovinaCarte",[]);
                break;

            default:
                game.graphix.sendUpdateToClients();
                game.turn.currentPlayer.sock.emit("indovinaCarte",game.turn.alreadySelected);
                break;
        }
    }
    else{
        game.graphix.endGame();
    }
}

module.exports = play;