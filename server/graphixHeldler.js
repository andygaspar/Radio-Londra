

class Graphix{

    constructor(game){
        this.game = game;
    }

    sendUpdateToClients(){
        this.game._server.emit("update",{
          names: this.game.playersNameList(), scores: this.game.playersScoreList()});
    }

    sendNewSelection(guess){
        for(var i= 0; i<this.game._numPlayers; i++){
            if(i != this.game.turn.currentPlayerIndex)
                this.game.turn.playersList[i].sock.emit("newCardSelected",guess);
        }
    }

    sendWriteGuessed(selectedCards){
        if(this.game.turn.cardsToGuess.cards.includes(selectedCards[0])) 
            this.game._server.emit("writeGuessed",selectedCards[0]);
        if(this.game.turn.cardsToGuess.cards.includes(selectedCards[1])) 
            this.game._server.emit("writeGuessed",selectedCards[1]);
    }

    endGame(){
        this.game._server.emit("endGame",this.game.winners);
    }
      
}


module.exports = Graphix;