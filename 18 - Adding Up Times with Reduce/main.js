// Get all the li elements with the data-time attribute and transform it into an array
const timeNodes = [...document.querySelectorAll('[data-time]')];

const seconds = timeNodes
                .map(node => node.dataset.time)
                .map(time => {
                    // separate the minutes from the seconds and turn string into int
                    let [min, sec] = time.split(":").map(parseFloat);

                    // Return the sum in seconds
                    return (min * 60) + sec
                })
                // start with total = 0, add the array element to it, keep adding to the total
                .reduce((total, secs) => total + secs, 0);

let secondsLeft = seconds;

// Get the whole number of hours from the seconds
const hours = Math.floor(secondsLeft / 3600);
// Get the remaining seconds 
secondsLeft = secondsLeft % 3600;

// Get the minutes
const minutes = Math.floor(secondsLeft / 60);
// Get the remaining seconds 
secondsLeft = secondsLeft % 60;

console.log(`${hours}:${minutes}:${secondsLeft}`);