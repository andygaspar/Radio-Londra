
function sleep(seconds){
    var now = new Date().getTime();
    while(new Date().getTime() < now + (seconds*1000)){};
}


module.exports = sleep;