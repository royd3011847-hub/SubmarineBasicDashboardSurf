let timer = null;
let time = "00:00:00";
let hundrithSecond = 0;
let second = 0;
let minute = 0;
let isPaused = false;


function update() {
     let time = 
                (minute < 10 ? "0" + minute : minute) + ":" +
                (second < 10 ? "0" + second : second) + ":" +
                (hundrithSecond < 10 ? "0" + hundrithSecond : hundrithSecond);
    document.getElementById("timer-value").textContent = time;
}

function stop(){
    update();
    clearInterval(timer);
    timer = null;
    hundrithSecond = 0;
    second = 0;
    minute = 0;
    isPaused = false;
}

function start(){
    if (isPaused) {
        isPaused = false;
        return;
    }
    if (timer !== null) return;
    timer = setInterval(() => {
        if (!isPaused) {
            hundrithSecond++;
            if (hundrithSecond >= 100) {
                hundrithSecond = 0;
                second++;
            }
            if (second >= 60) {
                second = 0;
                minute++;
            }
            update();
        }
    }, 10);
    
}

function pause(){
    if(second+minute+hundrithSecond===0){
        return;
    }
    isPaused = true;   
}
