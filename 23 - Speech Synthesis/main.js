// What the person is going to say
const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector("[name='text']").value;

function populateVoices() {
    // Get all the voices available
    voices = this.getVoices();
    
    // Create a string showing the name of the voice and its language
    const voiceOptions = voices 
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join("");

    // Add the string to the page
    voicesDropdown.innerHTML = voiceOptions;
}

function setVoice() {
    // Get the speechSynthesis obj corresponding to the name of the voice
    msg.voice = voices.find(voice => voice.name === this.value);

    toggle();
}

function toggle(startOver = true) {
    // Stop it from speaking
    speechSynthesis.cancel();

    // if !startOver, then don't start to speak
    if(startOver) {
        // Start to speak
        speechSynthesis.speak(msg);
    }
}

function setOptions() {
    // Set the property with its new value
    // this.name = name of the option changed
    // this.value = new value
    msg[this.name] = this.value;
    toggle();
}

// Make it speak
speechSynthesis.addEventListener('voiceschanged', populateVoices);
// Select a voice
voicesDropdown.addEventListener('change', setVoice);
// Change the options
options.forEach(option => option.addEventListener("change", setOptions));
// Buttons
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));