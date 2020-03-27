

class RadioLondra{

  constructor(plList,server){
    const Turn= require('./turno');
    const Graphix = require('./graphixHeldler');

    this._numPlayers = plList.length;
    this._playersList=plList;
    this._server = server;
    this.graphix = new Graphix(this);
    this.turn = new Turn(this._playersList,1);

    this.isOver = false;
    this.victoryScore = 8;
    this.winners = [];

    this._playersList.forEach(s => s.sock.emit('message','si parte'));
  }


  setGame(){
    const receive = require('./receive');
    receive(this);
  }

  startGame(){
    var play = require('./gameLogic');
    play(this);
    
    }


  setCodedMessage(codedMessage){
    this.turn.codedMessage = codedMessage;
  }

  cardSelection(selectedCards){

    this.turn.addToAlreadySelected(selectedCards);

    if(this.turn.currentIsNazi())
    this.turn.currentPlayer.updateNaziScore(selectedCards,this.turn.cardsToGuess.cards);
    else{
      this.turn.currentPlayer.updateScore(selectedCards,this.turn.cardsToGuess.cards);
      this.turn.speaker.updateScore(selectedCards,this.turn.cardsToGuess.cards);     
    }
  }


  newTurn(){
    const Turn= require('./turno');
    this.turn = new Turn(this.turn.playersList,this.turn.turnNum+1);
  }


  playersNameList(){
      var plNames=[]
      for (var i=0;i<this._playersList.length;i++){
        plNames.push(this._playersList[i].nome);
      }
      return plNames;
  }

  playersScoreList(){
      var plScores=[]
      for (var i=0;i<this._playersList.length;i++){
        plScores.push(this._playersList[i].score);
      }
      return plScores;
  }

  makeWinnersList(){
    var playerScores = this.playersScoreList();
    for(var i=0; i < this._numPlayers;i++){
      if(playerScores[i]>= this.victoryScore) this.winners.push(this._playersList[i].nome);
    }
  }

  checkEndGame(){
    var playerScores = this.playersScoreList();
    for(var i=0; i < this._numPlayers;i++){
      if(playerScores[i]>= this.victoryScore) this.isOver = true;
    }
    if(this.isOver==true) this.makeWinnersList();
    console.log(this.isOver);
  }

 

};


module.exports = RadioLondra;
