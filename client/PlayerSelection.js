

export default class PlayerSelection{
    constructor(){
        this.one = null;
        this.two = null;        
    }

    empty(){
        this.one = null;
        this.two = null; 
    }
    
    noneOrOneElement(){
        if(this.one==null) return true;
        else return false;
    }
    isFull(){
        if(this.two!=null) return true;
        else return false;
    }
}
