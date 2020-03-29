

export default class PlayerSelection{
    constructor(numCardToGuess){
        this.numCardToGuess = numCardToGuess
        this.one = null;
        this.two = null;     
        this.turnOver = false;   
    }

    add(cardSelected){
        if(this.one == null) this.one = cardSelected;
        else this.two = cardSelected;
    }

    isComplete(){
        if(!this.turnOver){
            if(this.numCardToGuess == 1){
                if(this.one!=null) return true;
                else return false;
            } 
            else {
                if(this.two!=null) return true;
                else return false;
            }
        }
        else return true;
    }
    over(){
        this.turnOver = true;
    }


}
