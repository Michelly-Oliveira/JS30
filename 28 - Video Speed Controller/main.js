const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function mouseMoveChangesPlaybackRate(e) {
  // offsetTop = can't assume that the speed element will always be on the top of the page; if it isn't, subtract the distance from the top of the page
  // e.pageY = coords in pixels of the event relative to the whole document, where the event happened
  const pixelsScrolled = e.pageY - this.offsetTop;
  // Turn pixels scrolled inside the speed bar into percentage -> 0 to 1
  const percent = pixelsScrolled / this.offsetHeight;
  // min and max for the playback rate
  const min = 0.4;
  const max = 4;
  // Format the percent variable
  const percentageHeight = Math.round(percent * 100) + '%';
  const playbackRate = percent * (max - min) + min;

  // Amount of the speed bar that is filled
  bar.style.height = percentageHeight;
  // Change the text to show the current playback rate
  bar.textContent = playbackRate.toFixed(2) + 'x';
  // Change the video's playback rate
  video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', mouseMoveChangesPlaybackRate);
