//createa timer variable for traditional pomodoro session
const timer = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
  longBreakInterval: 4,
  //create sessions variable to keep track of the number of pomodoro sessions
  sessions: 0,
};

//Declare an interval variable 
let interval;

//Eventlistener
const mainButton = document.getElementById('js-btn');
mainButton.addEventListener('click', () => {
  //store the value of the data-action attribute on the button in an action variable
  const { action } = mainButton.dataset;
  //check the value if it’s equal to 'start'
  if (action === 'start') {
    startTimer();
  } else {
    stopTimer();
  }
});

const modeButtons = document.querySelector('#js-mode-buttons');
modeButtons.addEventListener('click', handleMode);

function getRemainingTime(endTime) {
  //store the value of the difference between the current time and the end time in milliseconds
  const currentTime = Date.parse(new Date());
  const difference = endTime - currentTime;

  //converted the value to an integer in base 10
  const total = Number.parseInt(difference / 1000, 10);
  const minutes = Number.parseInt((total / 60) % 60, 10);
  const seconds = Number.parseInt(total % 60, 10);

  return {
    //stored the value
    total,
    minutes,
    seconds,
  };
}

function startTimer() {
  //retrieve the timestamp of the current moment
  let { total } = timer.remainingTime;
  const endTime = Date.parse(new Date()) + total * 1000;
  
  //sessions incremented at the start of a pomodoro session
  if (timer.mode === 'pomodoro') timer.sessions++;

  //change value of the data-action attribute & text content
  mainButton.dataset.action = 'stop';
  mainButton.textContent = 'stop';
  mainButton.classList.add('active');

  interval = setInterval(function () {
    timer.remainingTime = getRemainingTime(endTime);
    updateClock();

    total = timer.remainingTime.total;
    if (total <= 0) {
      clearInterval(interval);
      
      //auto switch to the next session on completion of the current one
      switch (timer.mode) {
        case 'pomodoro':
          if (timer.sessions % timer.longBreakInterval === 0) {
            switchMode('longBreak');
          } else {
            switchMode('shortBreak');
          }
          break;
        default:
          switchMode('pomodoro');
      }
      
      //display notice
      if (Notification.permission === 'granted') {
        const text =
          timer.mode === 'pomodoro' ? 'Get back to work!' : 'Take a break!';
        new Notification(text);
      }

      startTimer();
    }
  }, 1000);
}

//stop the timer
function stopTimer() {
  clearInterval(interval);

  mainButton.dataset.action = 'start';
  mainButton.textContent = 'start';
  mainButton.classList.remove('active');
}

//update the countdown portion of the application
function updateClock() {
  const { remainingTime } = timer;
  const minutes = `${remainingTime.minutes}`.padStart(2, '0');
  const seconds = `${remainingTime.seconds}`.padStart(2, '0');

  const min = document.getElementById('js-minutes');
  const sec = document.getElementById('js-seconds');
  min.textContent = minutes;
  sec.textContent = seconds;

  const progress = document.getElementById('js-progress');
  progress.value = timer[timer.mode] * 60 - timer.remainingTime.total;
}

function switchMode(mode) {
  //mode property is set to the current mode
  timer.mode = mode;
  timer.remainingTime = {
    total: timer[mode] * 60,
    minutes: timer[mode],
    seconds: 0,
  };

  document
    .querySelectorAll('button[data-mode]')
    .forEach(e => e.classList.remove('active'));
  document.querySelector(`[data-mode="${mode}"]`).classList.add('active');
  document
    .getElementById('js-progress')
    .setAttribute('max', timer.remainingTime.total);

  updateClock();
}

function handleMode(event) {
  //retrive value of the data-mode attribute from the target element
  const { mode } = event.target.dataset;

  if (!mode) return;

  switchMode(mode);
  stopTimer();
}


document.addEventListener('DOMContentLoaded', () => {
  //request for granding display notification 
  if ('Notification' in window) {
    if (
      Notification.permission !== 'granted' &&
      Notification.permission !== 'denied'
    ) {
      Notification.requestPermission().then(function (permission) {
        if (permission === 'granted') {
          new Notification(
            'Awesome! You will be notified at the start of each session'
          );
        }
      });
    }
  }
  //ensure that the mode and remainingTime properties are set on the timer object on page load
  switchMode('pomodoro');
});