var min = document.getElementById('minheading');
var sec = document.getElementById('secheading');
var msec = document.getElementById('msecheading');
var minute = 0;
var second = 0 ;
var msecond = 0;
var interval ;

function timer(){
    msecond++ ;
msec.innerHTML = msecond ;
if (msecond  >= 100){
    second++ ;
    sec.innerHTML = second ;
    msecond = 0 ;  
}
else if(second >= 60){
    minute++ ;
    min.innerHTML = minute ; 
}
}
function start(){
    interval = setInterval(timer , 10)
}
function stop(){
    clearInterval(interval)
}
function reset(){
    minute = 0 ;
    second = 0 ;
    msecond = 0 ;
    min.innerHTML = minute ;
    sec.innerHTML = second ;
    msec.innerHTML = msecond ;
    clearInterval(interval)
}
