class Giocatore{
  constructor(sock,nome,playerNum){
    this.sock= sock;
    sock.player = this;
    this.nome= nome.toUpperCase();
    this.playerNum = playerNum;
    this.score = 0;

    this.sock.player = this;
  }



  updateScore(selectedCards,cardsToGuess){
    for(var i=0; i<selectedCards.length; i++) {
      if(cardsToGuess.includes(selectedCards[i]))this.score += 1;
    }
  }

  updateNaziScore(selectedCards,cardsToGuess){
    for(var i=0; i<selectedCards.length; i++) {
      if(cardsToGuess.includes(selectedCards[i]))this.score += 2;
    }
  }

  compare(otherPlayer){
    if(this.nome.localeCompare(other.nome)) return true;
    else return false;
  }

}

module.exports = Giocatore;
