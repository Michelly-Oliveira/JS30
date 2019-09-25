const slider = document.querySelector('.items');
let isDown = false;
// X coords where the mouse clicked
let startMouseX;
// Amount to scroll
let scrollLeft;

function mouseDown(e) {
  isDown = true;
  slider.classList.add('active');
  // Where clicked - amount scrolled horizontally
  startMouseX = e.pageX - slider.offsetLeft;
  // Get the value that we already scrolled from the left side of the slider
  scrollLeft = slider.scrollLeft;
}

function mouseLeftSlider() {
  isDown = false;
  slider.classList.remove('active');
}

function mouseMove(e) {
  if (!isDown) {
    return;
  }

  e.preventDefault();

  // slider.offsetLeft = number of pixels that the upper left corner of the slider is offset to the left = 0, because the slider doesn't move
  // current mouse position - 0
  const currentMousePosition = e.pageX - slider.offsetLeft;

  // (where the mouse is - where we clicked) * 3 = make it move faster by multiplying
  // move mouse to left = negative value
  // move mouse to right = positive value
  const move = (currentMousePosition - startMouseX) * 3;

  // slider.scrollLeft = number of pixels that the slider is scrolled from the left edge
  // move mouse to left => 0 -(-move) = slide to right
  // move mouse to right =>0 -(move) = slide to left
  slider.scrollLeft = scrollLeft - move;
}

function mouseUp() {
  isDown = false;
  slider.classList.remove('active');
}

slider.addEventListener('mousedown', mouseDown);
slider.addEventListener('mouseleave', mouseLeftSlider);
slider.addEventListener('mousemove', mouseMove);
slider.addEventListener('mouseup', mouseUp);
