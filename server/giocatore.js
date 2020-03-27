class Giocatore{
  constructor(sock,nome){
    this.sock= sock;
    this.nome= nome.toUpperCase();
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

}

module.exports = Giocatore;
