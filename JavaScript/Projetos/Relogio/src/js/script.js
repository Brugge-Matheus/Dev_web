let digitalNumbers = document.querySelector('.digital')
let secondsElement = document.querySelector('.p_s')
let minutesElement = document.querySelector('.p_m');
let hourElement = document.querySelector('.p_h');

const updateClock = () => {
    let dateNow = new Date();
    let minute = dateNow.getMinutes();
    let hour = dateNow.getHours();
    let second = dateNow.getSeconds();

    let secondDegrease = ((360 / 60) * second) - 90;
    let minuteDegrease = ((360 / 60) * minute) - 90;
    let hourDegrease = ((360/ 12)  * hour) - 90;

    digitalNumbers.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    secondsElement.style.transform = `rotate(${secondDegrease}deg)`
    minutesElement.style.transform = `rotate(${minuteDegrease}deg)`
    hourElement.style.transform = `rotate(${hourDegrease}deg)`

}

const fixZero = (time) => {
   return time < 10 ? '0' + time : time;
}

setInterval(() => {
   updateClock();
    
}, 1000);
updateClock();