const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
  this.classList.add('trigger-enter');

  // Arrow function inherits the 'this' from the scope of the outer function. If you use a normal function, 'this' will change - won't be the li anymore
  setTimeout(() => {
    // Only add the active class if the trigger-enter is still on the element
    // If you hover in and out too fast, the active class gets removed before its actually added, because of setTimeout
    // So only add it if trigger-enter is still there, which means you are hovering the element
    if (this.classList.contains('trigger-enter')) {
      this.classList.add('trigger-enter-active');
    }
  }, 150);

  background.classList.add('open');

  // Find the dropdown inside the li element
  const dropdown = this.querySelector('.dropdown');
  // Get the coordinates from the dropdown
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
  };

  // Apply coords to dropdown background
  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
