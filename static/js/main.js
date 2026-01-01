

function stopClicked(){
    const header = document.getElementById("main-header");
    header.style.color = "red";
    stop();
}
function startClicked(){
    const header = document.getElementById("main-header");
    header.style.color = "#7aed15";
    start();
    
}
function pauseClicked(){
    const header = document.getElementById("main-header");
    header.style.color = "yellow";
    pause();
}
