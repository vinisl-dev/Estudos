
function timer(){

var seconds = 0;
var minutes = 0; 
var hours = 0;
var timer

const start = document.querySelector(".btn-1");
start.addEventListener("click", ()=> timer= setInterval( counter, 1))

const pause = document.querySelector(".btn-2");
pause.addEventListener("click", ()=> clearInterval(timer))

const stop = document.querySelector(".btn-3");
stop.addEventListener("click", ()=> {
clearInterval(timer)
 seconds = 0;
 hours=0;
 minutes=0;
 clock[0].innerHTML='00:00:00'

})

function twoDigits(num){
 if (num < 10){
  return "0"+num;
 }else{
  return num;
 }

}

const clock = document.getElementsByTagName("h1")

function counter(){
  seconds++;
  if (seconds == 60){
  seconds=0;
  minutes++;
  }
  if (minutes == 60){
    minutes=0;
    hours++;
  }
  clock[0].innerHTML= twoDigits(hours)+":"+ twoDigits(minutes) +":"+ twoDigits(seconds);
}

}
timer()
