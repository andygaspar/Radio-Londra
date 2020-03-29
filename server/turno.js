class Turn{
    constructor(plList,turnNum){
        var Carte = require('./carte');

        this.playersList = plList;
        this.turnNum = turnNum;
        this.cardsToGuess = new Carte();
        this.codedMessage = null;

        if(this.turnNum>1) this.rotatePlayers();

        this.speaker = this.playersList[0];
        this.nazi = this.playersList[1];

        this.alreadySelected = [];
        this.currentPlayer = this.playersList[0];
        this.currentPlayerIndex = -1;

        this.numCardsToGuess = 2;
        
        
    }

    nextPlayer(){
        this.currentPlayerIndex +=1;
        this.currentPlayer = this.playersList[this.currentPlayerIndex];
    }

    addToAlreadySelected(selectedCards) {
        for(var i=0; i<selectedCards.length; i++) {
            this.alreadySelected.push(selectedCards[i]);

            if(selectedCards[i] == this.cardsToGuess.uno || 
                selectedCards[i]==this.cardsToGuess.due) this.numCardsToGuess -= 1;
        }
    }

    currentIsNazi(){
        if(this.currentPlayerIndex==1) return true;
        else return false;
    }

    isOver(){
        if(this.numCardsToGuess == 0) return true;
        if(this.currentPlayerIndex == this.playersList.length-1) return true;
        else false;
    }

    rotatePlayers(){
        var newList = [this.playersList[1]];

        for(var i=2; i<this.playersList.length; i++)
          newList.push(this.playersList[i]);

        newList.push(this.playersList[0]);
        this.playersList = newList;
      }
}


module.exports = Turn;