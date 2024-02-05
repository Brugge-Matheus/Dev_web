// Set interval

let timer;
const timeArea = document.querySelector('.realTime');

function Start() {
    timer = setInterval(showTime, 1000);
}

function Stop() {
    clearInterval(timer);
    
}

function Clear() {
    timeArea.innerHTML = ''
}


function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let txt = `${hours}:${minutes}:${seconds}`;

    timeArea.innerHTML = txt;
}

// Tambem pode ser feito assim
/*function Start() {
    timer = setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let txt = `${hours}:${minutes}:${seconds}`;

    timeArea.innerHTML = txt;
    }, 1000);
}*/

// Set Time out

function StartIn2Seconds() {
    timer = setTimeout(() => {
        window.alert('Rodou!')

    }, 2000);
}

function StopNow() {
    clearTimeout(timer)
}



