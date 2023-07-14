let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let isRunning = false;
let timer;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(runTimer, 10);
    }
}

function runTimer() {
count++;
if (count === 100) {
    count = 0;
    sec++;
}
if (sec === 60) {
    sec = 0;
    min++;
}
if (min === 60) {
    min = 0;
    hr++;
}

document.getElementById('hr').innerText = formatTime(hr);
document.getElementById('min').innerText = formatTime(min);
document.getElementById('sec').innerText = formatTime(sec);
document.getElementById('count').innerText = formatTime(count);
}

function stopTimer() {
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    isRunning = false;
    clearInterval(timer);
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById('hr').innerText = '00';
    document.getElementById('min').innerText = '00';
    document.getElementById('sec').innerText = '00';
    document.getElementById('count').innerText = '00';
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
