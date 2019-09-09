/* Get the elements */
const player = document.querySelector('.player'); // The container
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
// anything that has a data-skip attribute
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build the functions */
function togglePlay() {
    // When the user clicks the play/pause button
    if(video.paused) {
        // If thevideo is paused, play it
        video.play();
    } else {
        // If is playing, pause it
        video.pause();
    }
}

function updateButton() {
    // the function is bound to the video element, so the keyword 'this' refers to the video
    // If the video changed state(play/pause. Initially is paused), change the icon
    let icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip() {
    // Add/subtract the skip time from the video
    // parseFloat() -> transform the string into a number
    // this.dataset.skip -> the value of the data-set attribute of the element
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    // this.name -> property name that was changed. volume or playbackRate
    // this.value -> the value after the change
    video[this.name] = this.value;
}

function handleProgress() {
    // Use the property flex-basis = width to change the progress bar
    // Work with percentage. The () gets the value and the *100 gets the percentage that represents that value
    let percent = (video.currentTime / video.duration) * 100;
    // Change the flex-basis property based on the percentage
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    // e.offsetX -> get the pixel value of where we clicked
    // progress.offsetWidth -> get the size of the progress bar
    // * video.duration -> calculate the percentage based on the video's duration
    let scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

/* Hook up the events */
video.addEventListener('click', togglePlay);
// Change the image of the button
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
// Change the progressBar's width based on the amount of time the video played
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(skipBtn => skipBtn.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

let mouseDown = false;
progress.addEventListener('click', scrub);
// (e) => mouseDown && scrub() : if mouseDown is ture, move to scrub()
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);