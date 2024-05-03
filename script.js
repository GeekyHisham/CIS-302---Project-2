// Hisham Hossain
// CIS 302
// Project 2

let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let lapTimerRef = document.querySelector('.lapTimerDisplay'); // Added lap timer reference
let int = null;
let laps = []; // Added lap times array

document.getElementById('startTimer').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});

document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(int);
});

document.getElementById('resetTimer').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
    lapTimerRef.innerHTML = ''; // Added lap timer reset
    laps = []; // Added lap times reset
});

// Added lap timer functionality
document.getElementById('lapTimer').addEventListener('click', ()=>{
    const lapTime = `Lap ${laps.length+1}: ${timerRef.innerHTML}`;
    laps.push(lapTime);
    lapTimerRef.innerHTML += `<div class="lapTime">${lapTime}</div>`; // Added lap time display
});

function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}