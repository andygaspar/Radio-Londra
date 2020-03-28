


export default class WinValue{
    constructor(){
        this.value = null;      
    }


    setWinValue(winValue){
        this.value = winValue;
    }

    isValid(input){
        if(input>4 && input<15) return true;
        else return false;
    }
}