let seconds = 00
let tens = 00

// declaration of the counter
let countSeconds = document.getElementById("seconds")
let countTens = document.getElementById("tens")

// declaration of the buttons
let buttonStart = document.getElementById("button-start")
let buttonStop = document.getElementById("button-stop")
let buttonReset = document.getElementById("button-reset")

var interval ;

function startTimer(){
    tens ++

    if(tens<9){
        countTens.innerHTML = "0" + tens;
    }
    if (tens>9){
        countTens.innerHTML = tens;
    }
    if(tens>99){
        seconds++
        countSeconds.innerHTML = "0" + seconds
        tens = 0;
        countTens.innerHTML = "0" + 0
    }
    if(seconds>9){
        countSeconds.innerHTML = seconds
    }
}

 buttonStart.onclick = function() {
    interval = setInterval(startTimer)
}

buttonStop.onclick = function() {
    clearInterval(interval)
}
buttonReset.onclick = function(){
    clearInterval(interval)
    tens = "00"
    seconds= "00"
    countSeconds.innerHTML = seconds
    countTens.innerHTML = tens

}


