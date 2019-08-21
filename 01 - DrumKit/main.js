function playSoundAndAddTransition(evt) {
    // Get the audio tag with the corresponding keyCode
    const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
    // Get the actual key div
    const key = document.querySelector(`.key[data-key="${evt.keyCode}"]`);
    
    // Stop the function from running if there is no audio tag associated with the key pressed
    if(!audio) {
       return;
    }

    // Reset the audio and play -> rewind to the start
    audio.currentTime = 0;
    audio.play();
    
    key.classList.add("playing");
}

function removeTransition(evt) {
    if(evt.propertyName !== "transform") { // stop the function if the event was not the transform
        return;
    }

    // 'this' is bound to the key element
    this.classList.remove("playing");
}

window.addEventListener('keydown', playSoundAndAddTransition);

// Get all the keys
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));