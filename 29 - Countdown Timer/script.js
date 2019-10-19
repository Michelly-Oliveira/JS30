// Store the interval so we can stop it
let countdown;

const timerDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // Clear any existing timers
  clearInterval(countdown);

  // Get current time, when timer started
  const now = Date.now();
  // When timer stops
  // now is in ms -> turn into secs *1000
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    // Check if we should stop it
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    // Display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes < 10 ? '0' : ''}${minutes}
                :${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;

  // Change the tab title
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  // Create a new date based on when the timer started
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();

  endTimeDisplay.textContent = `Be back at ${hour}:${minutes < 10 ? '0' : ''}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(btn => btn.addEventListener('click', startTimer));
// Use form
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  // Get the value the user typed
  const mins = this.minutes.value;
  timer(mins * 60);

  // Clear the form
  this.reset();
});
