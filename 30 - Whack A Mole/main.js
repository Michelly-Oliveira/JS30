const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
  // Random amount of time that the mole appears on the screen
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  // Get a random hole
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];

  // If the hole is the same as the previous one, run the function again
  if (hole === lastHole) {
    return randomHole(holes);
  }

  // Keep track of the last hole
  lastHole = hole;

  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);

  // Show the mole
  hole.classList.add('up');

  // After some time, remove the mole from screen
  setTimeout(() => {
    hole.classList.remove('up');
    // If the game isn't over yet, keep showing the moles
    if (!timeUp) {
      peep();
    }
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  peep();

  // After 10 seconds stop the game
  setTimeout(() => (timeUp = true), 10000);
}

function bonk(e) {
  if (!e.isTrusted) {
    // cheater
    return;
  }

  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));
