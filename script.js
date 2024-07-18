// let timer running mentioned hours minutes seconds milliseconds
let timer;
let isRunning = false;
let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];

// let their constant value on details
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapsBtn = document.getElementById('lapslist');

// button event listener
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', recordLap);

// start time
function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateTime, 10);
  }
}

// pause time
function pauseTimer() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
  }
}

// reset time
function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
  updateDisplay();
  lapsList.innerHTML = '';
}

// storrage the time
function recordLap (){
    if (isRunning) {
        const lapTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds / 10).padStart(2,'0')}`;
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = lapTime;
        lapsList.appendChild(li);
    }
}

// update the time to running
function updateTime() {
  milliseconds = milliseconds + 10;
  if (milliseconds >= 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60){
        minutes = 0;
        hours++;
      }
    }
  }
  updateDisplay();
}

// To running the time
function updateDisplay() {
  display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds / 10).padStart(2,'0')}`;
}
