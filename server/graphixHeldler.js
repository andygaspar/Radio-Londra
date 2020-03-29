

class Graphix{

    constructor(game){
        this.game = game;
        this.sleep = require('./sleep')
    }

    sendUpdateToClients(){
        this.game._server.emit("update",{
            names: this.game.playersNameList(), 
            scores: this.game.playersScoreList(),
            speaker: this.game.turn.speaker.playerNum,
            nazi: this.game.turn.nazi.playerNum,
            current: this.game.turn.currentPlayer.playerNum,
            numTurn: this.game.turn.turnNum
        });        
    }

    sendNewSelection(guess){
        for(var i= 0; i<this.game._numPlayers; i++){
            if(i != this.game.turn.currentPlayerIndex)
                this.game.turn.playersList[i].sock.emit("newCardSelected",guess);
        }
    }

    sendWriteGuessed(selectedCards){
        var writeCards = [];
        for (var card in selectedCards){
            if(this.game.turn.cardsToGuess.cards.includes(selectedCards[card])) 
                writeCards.push(selectedCards[card]);
        }
        this.sleep(0.4);
        this.game._server.emit("writeGuessed",writeCards);
        
    }

    newTurn(){
        this.game._server.emit('new_Turn');
        this.sleep(2.2);
        
    }

    endGame(){
        this.game._server.emit("endGame",this.game.winners);
    }
      
}


module.exports = Graphix;