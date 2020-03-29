
class Carte{
  constructor(){
    this.uno = Math.floor(Math.random() * 36);
    var cartaDue = Math.floor(Math.random() * 36);
    while(cartaDue == this.uno){
      cartaDue = Math.floor(Math.random() * 36);
    }
    this.due = cartaDue;
    this.cards = [this.uno, this.due];
  }

}

module.exports = Carte;
