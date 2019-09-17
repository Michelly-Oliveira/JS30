// Access the mic
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Create a vaariable to use
const recognition = new SpeechRecognition();
// Populate as we speak
recognition.interimResults = true;
recognition.lang = 'en-US';

// Create a paragraph
let p = document.createElement('p');
// Grab the div
const words = document.querySelector('.words');
// Add the paragraph to the div
words.appendChild(p);

recognition.addEventListener('result', e => {
    // console.log(e.results);
    // e.results -> stores what the user said; it's not an array

    // Create an array from the e.results to be able to use map
    const transcript = Array.from(e.results)
        //  grab the first item in the array
        .map(result => result[0])
        // get sentence 
        .map(result => result.transcript)
        // turn it into a big string containing what was said
        .join('');

    console.log(transcript);

    // Replace some curses
    const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
    p.textContent = poopScript;

    // e.results.isFinal -> is the person done talking
    if(e.results[0].isFinal) {
        // Overwrite the paragraph when we stop talking
        p = document.createElement('p');
        words.appendChild(p);
    }
});

// When the user stops talking, start again
recognition.addEventListener('end', recognition.start);

// Start after the user allows access to mic
recognition.start();