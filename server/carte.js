
class Carte{
  constructor(){
    this.uno = Math.floor((Math.random() * 36) + 1);
    var cartaDue = Math.floor((Math.random() * 36) + 1);
    while(cartaDue == this.uno){
      cartaDue = Math.floor((Math.random() * 36) + 1);
    }
    this.due = cartaDue;
    this.cards = [this.uno, this.due];
  }

}

module.exports = Carte;
