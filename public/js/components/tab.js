const toggler = document.querySelector('.help');
const tab   = document.querySelector('.tab');
const icon = document.querySelector('.material-icons')

/*
 * Toggles on and off the 'active' class on the menu
 * and the toggler button.
 */
toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  tab.classList.toggle('active');
  icon.classList.toggle('active');
})

function switchTimer(){

  var x = document.getElementById("stopwatch");
var z = document.getElementById("pomodoro")
  if (x.style.display === "none") {
        x.style.display = "block"
      z.style.display = "none";
  } else {
      z.style.display = "block";
      x.style.display = "none";
  }
}

 document.getElementById("stopwatchSwitch").addEventListener("click", switchTimer);
 document.getElementById("pomodoroSwitch").addEventListener("click", switchTimer);